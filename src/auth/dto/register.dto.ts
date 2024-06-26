import { IsString, IsNotEmpty, IsEmpty, IsEmail } from 'class-validator';


export class RegisterUsers {
    @IsString()
    @IsEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsEmpty()
    password:string;
}