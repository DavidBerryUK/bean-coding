import { enumOptionType }                       from "./OptionBaseModel"
import DataQuantityItemCollection               from "../DataModels/itemAndQuantity/DataQuantityItemCollection"
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionButterAndSpreadsModel extends OptionBaseModel {

    optionsCollection: DataQuantityItemCollection;

    constructor(name: string) {
        super(name, enumOptionType.ButterAndSpreads)
        this.optionsCollection = new DataQuantityItemCollection();
    }
}