import { Module } from '@nestjs/common';

/* Modules */
import { AuthModule } from './core/auth/auth.module';
import { CoreModule } from './core/core.module';

/* Controllers */
import { AppController } from './app.controller';

@Module({
  imports: [CoreModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
