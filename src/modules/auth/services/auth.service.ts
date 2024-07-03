import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/auth.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/register.dto';
import { LoginUserDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();
            if (existingUser) {
                throw new BadRequestException('User already exists');
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

            createUserDto.password = hashedPassword
            const newUser = new this.userModel(createUserDto);
            return await newUser.save();
        } catch (error) {
            // Check for specific error types and throw appropriate exceptions
            if (error instanceof BadRequestException) {
                throw error;
            }
            // For any other type of error, throw a generic internal server error
            throw new InternalServerErrorException('An unexpected error occurred');
        }
    }
    async login(loginUserDTO: LoginUserDto) {
        try {
            const user = await this.userModel.findOne({ email: loginUserDTO.email }).exec()
            if (!user) {
                throw new UnauthorizedException('Invalid email or password');
            }
            const isPasswordValid = await bcrypt.compare(loginUserDTO.password, user.password);
            if (!isPasswordValid) {
                // Return user if password not matches
                throw new UnauthorizedException('Invalid email or password');
            }
            const { email, username, _id, roles } = user
            return {
                data: { _id, email, username, roles },
                message: "Login successful"
            };



        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error;
            }
            throw new InternalServerErrorException('An unexpected error occurred');
        }
    }
}
