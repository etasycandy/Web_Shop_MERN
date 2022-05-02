import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Colors, ColorsDocument } from './schemas/colors.schema';
import { Model } from 'mongoose';

@Injectable()
export class ColorsService {
  constructor(
    @InjectModel(Colors.name) private colorsModel: Model<ColorsDocument>,
  ) {}

  async create(createColorDto: CreateColorDto): Promise<Colors> {
    return await this.colorsModel.create(createColorDto);
  }

  async findAll() {
    return this.colorsModel.find();
  }

  async findOne(id: string): Promise<Colors> {
    const result = await this.colorsModel.findById(id);
    if (!result) throw new NotFoundException('Color not found!');
    return result;
  }

  async update(id: string, updateColorDto: UpdateColorDto): Promise<Colors> {
    const result = await this.colorsModel.findByIdAndUpdate(id, updateColorDto);
    if (!result) throw new NotFoundException('Update color failed!');
    return result;
  }

  async remove(id: string): Promise<Colors> {
    const result = await this.colorsModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Delete color failed!');
    return result;
  }
}
