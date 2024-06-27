import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/register.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Get('login')
    getLogin(){
        
    }
    @Post('register')
    signup(@Body()createUserDto:CreateUserDto){
        return (this.authService.create(createUserDto))
    }
}
