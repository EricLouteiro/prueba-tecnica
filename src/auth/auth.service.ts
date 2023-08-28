import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    return await this.usersService.loginUser(email, pass);
  }

  login(user: { id: string; email: string }) {
    const payload = { email: user.email, id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
