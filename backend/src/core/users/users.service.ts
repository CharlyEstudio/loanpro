import { Injectable } from '@nestjs/common';

/* Interfaces */
import { UserInterface } from 'src/interfaces/user.interface';

/* Constants */
import { USER } from 'src/constants/user.constant';

@Injectable()
export class UsersService {
    users: UserInterface[] = USER;

    async findOne(username: string): Promise<UserInterface | undefined> {
        return this.users.find((user: UserInterface) => user.username = username);
    }
}
