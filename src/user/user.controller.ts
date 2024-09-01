import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    // @Post()
    // async createUser(
    //     @Body()
    //     user: CreateUserDto
    // ): Promise<User>{
    //     return this.userService.create(user);
    // }
}
