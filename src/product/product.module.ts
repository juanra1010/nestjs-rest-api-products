import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProducrtSchema } from "./schemas/product.schema";

@Module({
  imports : [
    MongooseModule.forFeature([
      {name: 'Product', schema: ProducrtSchema}
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
