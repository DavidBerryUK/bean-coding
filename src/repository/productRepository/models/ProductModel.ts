import OptionModel                              from "./OptionModel";
import ProductSizeModel                         from "./SizeModel";

export default class ProductModel {
    ProductId: number = 0;
    name: string = "";
    description: string = "";
    ImageThumbnailUri: string = "";
    ImageFullSizeUri: string = "";
    options: Array<OptionModel> = new Array<OptionModel>();
    sizes: Array<ProductSizeModel> = new Array<ProductSizeModel>();
}