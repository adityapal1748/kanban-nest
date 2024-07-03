import { Body, Controller, Post } from '@nestjs/common';
import { TeamsService } from '../services/teams.service';
import { createTeamsDTO } from '../dto/createTeams.dto';

@Controller('teams')
export class TeamsController {

    constructor(private teamsService:TeamsService){}
    
    @Post('createTeams')
    creatTeams(@Body()createTeamsDTO:createTeamsDTO){
        return  this.teamsService.createTeams(createTeamsDTO)
    }

    
}
