import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  readonly priceOld: number;

  @IsArray()
  readonly image: string[];

  @IsString()
  @IsNotEmpty()
  readonly slug: string;

  readonly description: string;
  readonly category: string;
  readonly colors: string[];
  readonly size: string[];
}
