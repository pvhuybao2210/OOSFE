import { ProductTail } from "../../admin/models/ProductTail";

export class ProductModel{
    id: string;
    code: string;
    name: string;
    description : string;
    details:string;
    idCategory: string;
    status: number;  
    categoryName:string;
    productTails:ProductTail[];
    constructor () {}
    minPrice:number;
    maxPrice:number;
    totalQuantity:number;
    basicImage:string;
}