import { enumOptionType }                       from "./OptionBaseModel"
import DataQuantityItemCollectionGroup          from "../DataModels/itemAndQuantity/DataQuantityItemCollectionGroup"
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionAddInModel extends OptionBaseModel {

    optionsGroup: DataQuantityItemCollectionGroup;

    constructor(name: string) {
        super(name, enumOptionType.AddIn)
        this.optionsGroup = new DataQuantityItemCollectionGroup();
    }

}