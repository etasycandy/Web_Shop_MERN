import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schemas/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModel: Model<ProductsDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    return await this.productsModel.create(createProductDto);
  }

  findAll() {
    return this.productsModel.find();
  }

  async findOne(id: string): Promise<Products> {
    const result = await this.productsModel.findById(id);
    if (!result) throw new NotFoundException('Product not found!');
    return this.productsModel.findById(id);
  }

  async update(
      id: string,
      updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    const results = await this.productsModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!results) throw new NotFoundException('Update user failed!');
    return results;
  }

  async remove(id: string): Promise<Products> {
    const results = await this.productsModel.findByIdAndDelete(id);
    if (!results) throw new NotFoundException('Delete user failed!');
    return results;
  }
}
