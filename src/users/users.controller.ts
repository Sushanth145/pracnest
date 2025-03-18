import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() body: { name: string }) {
        console.log(body);  // Debugging log
        return this.usersService.createUser(body.name);
    }
}
