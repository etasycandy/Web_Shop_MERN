import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sizes, SizesDocument } from './schemas/sizes.schema';
import { Model } from 'mongoose';
import {Colors} from "../colors/schemas/colors.schema";

@Injectable()
export class SizesService {
  constructor(
    @InjectModel(Sizes.name) private sizesModel: Model<SizesDocument>,
  ) {}

  async create(createSizeDto: CreateSizeDto): Promise<Sizes> {
    return await this.sizesModel.create(createSizeDto);
  }

  async findAll() {
    return this.sizesModel.find();
  }

  async findOne(id: string): Promise<Sizes> {
    const result = await this.sizesModel.findById(id);
    if (!result) throw new NotFoundException('Size not found!');
    return result;
  }

  async update(id: string, updateSizeDto: UpdateSizeDto): Promise<Sizes> {
    const result = await this.sizesModel.findByIdAndUpdate(id, updateSizeDto);
    if (!result) throw new NotFoundException('Update size failed!');
    return result;
  }

  async remove(id: string): Promise<Sizes> {
    const result = await this.sizesModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Delete size failed!');
    return result;
  }
}
