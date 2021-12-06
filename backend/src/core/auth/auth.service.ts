import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/* Interfaces */
import { UserInterface } from 'src/interfaces/user.interface';
import { LoginInterface } from 'src/interfaces/login.interface';
import { PayloadInterface } from 'src/interfaces/payload.interface';

/* Services */
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<UserInterface | null> {
        const user: UserInterface = await this.usersService.findOne(username);

        if (!user || user.password !== pass) {
            return null;
        }

        const { password, ...result } = user;
        return result;
    }

    async login(user: UserInterface): Promise<LoginInterface> {
        const payload: PayloadInterface = {
            username: user.username,
            sub: user.userId,
        };
        const resp: LoginInterface = {
            accessToken: this.jwtService.sign(payload),
        };

        return resp;
    }
}
