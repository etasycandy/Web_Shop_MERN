import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'
import { Role } from '../role.enum';

export type UserDocument = User & Document;

@Schema({
    toJSON: {
        virtuals: true,
        getters: true
    },
    toObject: {
        virtuals: true,
        getters: true
    }
})
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true, index: true })
    email: string;

    @Prop({
        required: true
    })
    password: string

    @Prop({ default: Role.User })
    role: Role.User

    @Prop()
    createdAt: number
}

export enum StoryStatus {
    OnGoing = 'OnGoing', End = "End", Drop = "Drop"
}

export const UserSchema = SchemaFactory.createForClass(User)