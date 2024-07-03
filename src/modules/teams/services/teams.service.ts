import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument, Teams } from '../schemas/teams.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {

    constructor(@InjectModel(Teams.name)private teamsModel:Model<TeamDocument>){}
    async createTeams(payload){
        try{

            const createTeam = new this.teamsModel(payload)
            const savedTeam = await createTeam.save()
            return {
                data:{
                    teamName:savedTeam.teamName
                },
                message: "Team created successfully"
            }

        }catch(error){
            throw new InternalServerErrorException('An unexpected error occurred');
        }
    }
}
