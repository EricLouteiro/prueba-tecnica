import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { PrismaService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const userCreated = await this.prisma.user.create({
      data: {
        name,
        email,
        password: this.genPassword(password),
      },
    });

    return { id: userCreated.id };
  }

  async findAll() {
    const usersDb = await this.prisma.user.findMany({
      where: { status: true },
    });

    const users = usersDb.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    return users;
  }

  async findOne(id: string, isInternalReq: boolean = false) {
    const { name, email, ...rest } = await this.prisma.user.findFirst({
      where: { id, status: true },
    });

    return isInternalReq
      ? { id: rest.id, name, email, password: rest.password }
      : { id: rest.id, name, email };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { email, name, password } = updateUserDto;
    const actualData = await this.findOne(id, true);

    const userUpdated = await this.prisma.user.update({
      where: { id },
      data: {
        name: name || actualData.name,
        email: email || actualData.email,
        password: password ? this.genPassword(password) : actualData.password,
        updated_at: new Date(),
      },
    });

    return { id: userUpdated.id };
  }

  async remove(id: string) {
    const deleteUser = await this.prisma.user.update({
      where: { id },
      data: { status: false },
    });

    return `User #${deleteUser.id} deleted`;
  }

  async loginUser(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string } | null> {
    const user = await this.prisma.user.findFirst({
      where: { email, status: true },
    });
    return user && compareSync(password, user.password)
      ? { id: user.id, email: user.email }
      : null;
  }

  private genPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }
}
