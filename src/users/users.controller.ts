import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./users.service.js";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    CreateUser() {
        return this.userService.createUser()
    }
}