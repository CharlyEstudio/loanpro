import { Injectable } from '@nestjs/common';

/* Interfaces */
import { UserInterface } from 'src/interfaces/user.interface';

/* Services */
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    async validateUser(username: string, pass: string): Promise<UserInterface | null> {
        const user: UserInterface = await this.usersService.findOne(username);

        if (!user || user.password !== pass) {
            return null;
        }

        const { password, ...result } = user;
        return result;
    }
}
