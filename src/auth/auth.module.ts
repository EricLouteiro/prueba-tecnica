import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    PrismaService,
    UserService,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
