import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  display: string;

  @IsString()
  @IsNotEmpty()
  categorySlug: string;
}
