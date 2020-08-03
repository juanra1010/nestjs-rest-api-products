import { Document } from "mongoose";

export interface Product extends Document {
    readonly serial : string;
    readonly name : string;
    readonly brand : string;
    readonly productType : string;
    readonly quantityMilliliters : number;
    readonly price : number;
    readonly createdAt : Date;
}