import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh_token(refresh_token: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
