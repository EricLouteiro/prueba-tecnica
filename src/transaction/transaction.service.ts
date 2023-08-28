import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto, userId: string) {
    const { amount, currency, description } = createTransactionDto;
    const trasnaction = await this.prisma.transaction.create({
      data: {
        amount,
        currency,
        description,
        userId: userId,
      },
    });

    return `Transaction ${trasnaction.id} created`;
  }

  async findAll(userId: string) {
    const allTransaction = await this.prisma.transaction.findMany({
      where: { userId: userId, status: true },
    });

    const transaction = allTransaction.map((trans) => ({
      id: trans.id,
      ammount: trans.amount,
      description: trans.description,
      createdAt: trans.created_at,
    }));

    return transaction;
  }

  async findOne(id: string) {
    const { userId, ...rest } = await this.prisma.transaction.findFirst({
      where: { id, status: true },
    });
    return { ...rest };
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const updateTransaction = await this.prisma.transaction.update({
      where: { id },
      data: {
        description: updateTransactionDto.description,
      },
    });
    return `Transaction ${updateTransaction.id} updated`;
  }

  async remove(id: string) {
    const deleteTransaction = await this.prisma.transaction.update({
      where: { id },
      data: { status: false },
    });
    return `Transaction ${deleteTransaction.id} deleted`;
  }
}
