import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateSizeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  display: string;

  @IsString()
  @IsNotEmpty()
  size: string;
}
