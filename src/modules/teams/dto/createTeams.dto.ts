import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class createTeamsDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(4,{
        message:'Team Name must be more than 4 words'
    })
    teamName;

    @IsNotEmpty()
    description;



}