import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(user: User): Promise<void>;
    findAll(): Promise<User[]>;
}
