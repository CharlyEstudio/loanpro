import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

/* JWT */
import { JwtModule } from '@nestjs/jwt';

/* Constants */
import { JWT_CONSTANTS } from 'src/constants/jwt.constant';

/* Modules */
import { UsersModule } from '../users/users.module';

/* Strategies */
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

/* Services */
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: {
        expiresIn: '60s'
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
