import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/kanban"),
    AuthModule,
    TeamsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
