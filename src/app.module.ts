import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Module } from './test1/test1.module';
import { Test2Module } from './test2/test2.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma-service/prisma-service.service';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    Test1Module,
    Test2Module,
    AuthModule,
    UserModule,
    ConfigModule.forRoot(),
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
