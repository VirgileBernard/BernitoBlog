import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    register(user: User): Promise<any>;
    getProfile(req: any): any;
    refresh_token(refresh_tokenDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
}
