import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async login(user: {
    username: string;
    password: string;
  }): Promise<{ access_token: string; refresh_token: string }> {
    const { username, password } = user;
    const existingUser = await this.usersService.findOne(username);
    if (existingUser?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: existingUser._id, username: existingUser.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
      }),
    };
  }

  async refresh_token(
    refresh_token: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload = this.jwtService.verify(refresh_token, {
      secret: jwtConstants.secret,
    });
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload),
    };
  }
}
