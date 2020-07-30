import { enumOptionType }                       from "./options/OptionBaseModel";
import OptionBaseModel                          from "./options/OptionBaseModel";
import ProductSizeModel                         from "./SizeModel";

export default class ProductModel {
    ProductId: number = 0;
    name: string = "";
    description: string = "";
    ImageThumbnailUri: string = "";
    ImageFullSizeUri: string = "";
    options: Array<OptionBaseModel> = new Array<OptionBaseModel>();
    sizes: Array<ProductSizeModel> = new Array<ProductSizeModel>();

    selectedSize: ProductSizeModel | undefined;

    /**
     * Select first size if none is currently selected
     */    
    selectDefaultSize() {
        if ( this.selectedSize === undefined) {
            if ( this.sizes.length > 0) {
                this.selectedSize = this.sizes[0];
            }
        }
    }

    hasOption( optionType: enumOptionType ) : boolean {
        if (this.options.find((option) => option.optionType === optionType)) {
            return true;
        }
        return false;
    }

    getOptionModel(optionType: enumOptionType)  : OptionBaseModel | undefined {
        return this.options.find((option) => option.optionType === optionType);        
    }
}