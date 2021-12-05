import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

/* Modules */
import { UsersModule } from '../users/users.module';

/* Strategies */
import { LocalStrategy } from './strategies/local.strategy';

/* Services */
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
