import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ColorsDocument = Colors & Document;

@Schema()
export class Colors {
  @Prop()
  display: string;

  @Prop()
  color: string;
}

export const ColorsSchema = SchemaFactory.createForClass(Colors);
