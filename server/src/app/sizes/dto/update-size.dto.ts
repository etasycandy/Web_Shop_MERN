import { PartialType } from '@nestjs/mapped-types';
import { CreateSizeDto } from './create-size.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateSizeDto extends PartialType(CreateSizeDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  display: string;

  @IsString()
  @IsNotEmpty()
  size: string;
}
