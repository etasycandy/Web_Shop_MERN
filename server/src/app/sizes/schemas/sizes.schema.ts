import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SizesDocument = Sizes & Document;

@Schema()
export class Sizes {
  @Prop()
  display: string;

  @Prop()
  size: string;
}

export const SizesSchema = SchemaFactory.createForClass(Sizes);
