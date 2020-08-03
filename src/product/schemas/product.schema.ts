import { Schema } from "mongoose";

export const ProducrtSchema = new Schema({
    serial : {type : String, required : true } ,
    name : String,
    brand : String,
    productType : String,
    quantityMilliliters : Number,
    price : Number,
    createdAt : {
        type : Date,
        default : Date.now
    }
});