import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProdcutDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async getProducts(): Promise<Product[]>{
        const productArray = await this.productModel.find();
        return productArray;
    }

    async getProduct(idProduct: string): Promise<Product>{
        const product = await this.productModel.findById(idProduct);
        return product;
    }

    async createProduct(createProductDTO: CreateProdcutDTO): Promise<Product>{
        const product = new this.productModel(createProductDTO);
        await product.save();
        return product;
    }

    async deleteProduct(idProduct: string): Promise<Product>{
        const deletedProduct = await this.productModel.findByIdAndDelete(idProduct);
        return deletedProduct;
    }

    async updateProduct(idProduct: string, createProductDTO: CreateProdcutDTO): Promise<Product>{
        const updatedProdcut = await this.productModel.findByIdAndUpdate(idProduct,createProductDTO, {new : true});
        return updatedProdcut;
    }

}
