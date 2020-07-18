import { enumOptionType }                       from "./OptionBaseModel"
import DataQuantityItemCollection               from "../DataModelss/itemAndQuantity/DataQuantityItemCollection"
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionButterAndSpreadsModel extends OptionBaseModel {

    optionsCollection: DataQuantityItemCollection;

    constructor(name: string) {
        super(name, enumOptionType.ButterAndSpreads)
        this.optionsCollection = new DataQuantityItemCollection();
    }
}