import { EnumProductContextAction }             from "./IProductContextDispatchCommand";
import { IProductContextDispatchCommand }       from "./IProductContextDispatchCommand";
import { ProductContexttProps }                 from '../productContext';
import ProductModel                             from "../../../../../repository/productRepository/models/ProductModel";

export default class  CommandUpdateProduct implements IProductContextDispatchCommand
{
    readonly commandType : EnumProductContextAction = EnumProductContextAction.Update;
    product : ProductModel;

    constructor(product : ProductModel) {
        this.product = product;
    }    

    updateState(state : ProductContexttProps ): ProductContexttProps {
        return { ...state, product: this.product };
    }
}