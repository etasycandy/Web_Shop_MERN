import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sizes, SizesSchema } from './schemas/sizes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sizes.name, schema: SizesSchema }]),
  ],
  controllers: [SizesController],
  providers: [SizesService],
})
export class SizesModule {}
