import { Module } from '@nestjs/common';
import { TeamsService } from './services/teams.service';
import { TeamsController } from './controllers/teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teams, TeamsSchema } from './schemas/teams.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Teams.name,schema:TeamsSchema}])],
  providers: [TeamsService],
  controllers:[TeamsController]
})
export class TeamsModule {}
