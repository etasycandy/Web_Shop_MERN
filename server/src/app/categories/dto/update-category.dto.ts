import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  display: string;

  @IsString()
  @IsNotEmpty()
  categorySlug: string;
}
