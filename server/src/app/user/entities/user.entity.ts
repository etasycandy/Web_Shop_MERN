import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    virtuals: true,
    getters: true,
  },
  toObject: {
    virtuals: true,
    getters: true,
  },
})
export class User {
  @Prop({ required: true })
  name: string;

  // unique sẽ không có tác dụng
  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({
    required: true,
  })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
