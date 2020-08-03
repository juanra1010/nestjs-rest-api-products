import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import {  CreateProdcutDTO} from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productServie : ProductService){}

    @Post('/create')
    async createPrduct(@Res() res, @Body() createProducDTO: CreateProdcutDTO){
        const product = await this.productServie.createProduct(createProducDTO);
        return res.status(HttpStatus.OK).json({
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const producArray =  await this.productServie.getProducts();
        return res.status(HttpStatus.OK).json({
            producArray
        });
    }

    @Get('/:idProduct')
    async getProduct(@Res()  res, @Param('idProduct') idProduct){
        const product = await this.productServie.getProduct(idProduct);
        if (!product) { throw new NotFoundException('producto no exitente!!') }
        return res.status(HttpStatus.OK).json({
            product
        });
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('idProduct') idProduct){
        const productDeleted = await this.productServie.deleteProduct(idProduct);
        if(!productDeleted){throw new NotFoundException('producto no existe!! por ende no fue borrado')}
        return res.status(HttpStatus.OK).json({
            message : 'producto Borrado exitosamente...',
            productDeleted
        });
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProducDTO: CreateProdcutDTO, @Query('idProduct') idProduct){
        const updatedProduct = await this.productServie.updateProduct(idProduct, createProducDTO);
        if (!updatedProduct) {throw new NotFoundException('Producto inexistente...') }
        res.status(HttpStatus.OK).json({
            message: 'Producto actualizado',
            updatedProduct
        })
    }
}

