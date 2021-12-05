import { Controller, Post, Request, UseGuards } from '@nestjs/common';

/* Guards */
import { LocalAuthGuard } from './core/auth/guards/local-auth.guard';

/* Interfaces */
import { UserInterface } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req): UserInterface {
    return req.user;
  }
}
