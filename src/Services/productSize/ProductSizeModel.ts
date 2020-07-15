import { EnumProductSize }                          from "./EnumProductEnums";
import { EnumProductType }                          from "./EnumProductEnums";

export default class ProductSizeModel {
    name: string;
    productSize: EnumProductSize;
    productType: EnumProductType;
    iconScale: number;
    volume: string;

    constructor(
        productSize: EnumProductSize,
        productType: EnumProductType,
        name: string,
        volume: string,
        iconScale: number) {
        this.productSize = productSize;
        this.name = name;
        this.productType = productType;
        this.volume = volume;
        this.iconScale = iconScale;
    }
}