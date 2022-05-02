import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categories, CategoriesDocument } from './schemas/categories.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private categoriesModel: Model<CategoriesDocument>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Categories> {
    return await this.categoriesModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoriesModel.find();
  }

  async findOne(id: string): Promise<Categories> {
    const result = await this.categoriesModel.findById(id);
    if (!result) throw new NotFoundException('Category not found!');
    return result;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Categories> {
    const result = await this.categoriesModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
    );
    if (!result) throw new NotFoundException('Update category failed!');
    return result;
  }

  async remove(id: string): Promise<Categories> {
    const result = await this.categoriesModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Delete category failed!');
    return result;
  }
}
