import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories {
  @Prop()
  display: string;

  @Prop()
  categorySlug: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
