import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SizesService } from './sizes.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Controller('sizes')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizesService.create(createSizeDto);
  }

  @Get()
  findAll() {
    return this.sizesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    await this.sizesService.update(id, updateSizeDto);
    return 'Updated size successfully!';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.sizesService.remove(id);
    return 'Deleted size successfully!';
  }
}
