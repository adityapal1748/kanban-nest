import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TeamDocument = Teams & Document;

@Schema()
export class Teams {
    @Prop({ required: true ,type:String})
    teamName;

    @Prop({ required: true,type:String })
    description;

    @Prop({ default: Date.now ,type:Date})
    createdAt: Date;



}
export const TeamsSchema = SchemaFactory.createForClass(Teams);