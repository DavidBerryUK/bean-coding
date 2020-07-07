import ProductSizeModel                         from "./ProductSizeModel";

export default class ProductModel {
    productNumber: number = 0; 
    name : string = "";
    description: string = "";    
    filenameThumbnail: string = "";
    filenameLarge: string = "";

    sizes : Array<ProductSizeModel> = new Array<ProductSizeModel>();
   
    
}