import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {
    this.findOne('admin').then((user) => {
      if (!user) {
        const adminUser = new this.userModel({
          username: 'admin',
          password: 'admin',
          role: 'admin',
        });
        adminUser.save();
      }
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    const existingUser = await this.userModel
      .findOne({ username: createUserDto.username })
      .exec();
    if (existingUser) {
      return null; // User already exists
    }
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ username: username }).exec();
  }
}
