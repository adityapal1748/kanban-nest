import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get('login')
    getLogin(){
        
    }
    @Post('register')
    signup(){
        
    }
}
