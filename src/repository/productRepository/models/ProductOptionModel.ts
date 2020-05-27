import { EnumOptionSelectType }                 from "../enum/ProductEnums";
import ProductOptionSizeModel                   from "./ProductOptionSizeModel";

export default class ProductOptionModel {

    name : string = "";
    formCode: EnumOptionSelectType = EnumOptionSelectType.None;

    sizes: Array<ProductOptionSizeModel> = new Array<ProductOptionSizeModel>();
    children : Array<ProductOptionModel> = new Array<ProductOptionModel>();
    products : Array<ProductOptionModel> = new Array<ProductOptionModel>();

}