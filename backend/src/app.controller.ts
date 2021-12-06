import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

/* Guards */
import { LocalAuthGuard } from './core/auth/guards/local-auth.guard';
import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard';

/* Interfaces */
import { LoginInterface } from './interfaces/login.interface';
import { UserInterface } from './interfaces/user.interface';

/* Services */
import { AuthService } from './core/auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<LoginInterface> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): UserInterface {
    return req.user;
  }
}
