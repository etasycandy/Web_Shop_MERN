import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Colors } from '../../colors/schemas/colors.schema';
import { Sizes } from '../../sizes/schemas/sizes.schema';
import { Categories } from '../../categories/schemas/categories.schema';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  priceOld: number;

  @Prop()
  image: string[];

  @Prop({ slug: 'name', unique: true })
  slug: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: Categories.name })
  category: string;

  @Prop([{ type: Types.ObjectId, ref: Colors.name }])
  colors: string[];

  @Prop([{ type: Types.ObjectId, ref: Sizes.name }])
  size: string[];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
