import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/register.dto';
import { AuthService } from '../services/auth.service';
import { LoginUserDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Get('login')
    getLogin(@Body() loginUserDTO: LoginUserDto) {

        return this.authService.login(loginUserDTO)

    }
    @Post('register')
    signup(@Body() createUserDTO: CreateUserDto) {
        return (this.authService.create(createUserDTO))
    }
}
