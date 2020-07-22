import { IProductContextDispatchCommand, EnumProductContextAction } from "./IProductContextDispatchCommand";
import ProductModel from "../../../../repository/productRepository/models/ProductModel";

export default class  CommandUpdate implements IProductContextDispatchCommand
{
    readonly commandType : EnumProductContextAction = EnumProductContextAction.Update;
    product : ProductModel;

    constructor(product : ProductModel) {
        this.product = product;
    }    
}