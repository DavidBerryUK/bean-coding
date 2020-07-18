import { enumOptionType }                       from "./OptionBaseModel"
import DataQuantityItemCollectionGroup          from "../DataModels/itemAndQuantity/DataQuantityItemCollectionGroup"
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionBlendedModel extends OptionBaseModel  {

    optionsGroup : DataQuantityItemCollectionGroup;

    constructor(name: string) {
        super(name, enumOptionType.Blended)
        this.optionsGroup = new DataQuantityItemCollectionGroup();
    }

}