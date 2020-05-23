import ProductOptionModel                       from "./ProductOptionModel";
import ProductSizeModel                         from "./ProductSizeModel";

export default class ProductModel {
    name : string = "";
    description: string = "";    
    filenameThumbnail: string = "";
    filenameLarge: string = "";

    sizes : Array<ProductSizeModel> = new Array<ProductSizeModel>();
    options : Array<ProductOptionModel> = new Array<ProductOptionModel>();
    
}