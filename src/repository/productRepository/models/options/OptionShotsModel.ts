import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionGroup                  from "../DataModels/selectList/DataItemCollectionGroup";
import DataQuantityItem                         from "../DataModels/itemAndQuantity/DataQuantityItem";
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionShotsModel extends OptionBaseModel {

    optionGroup: DataItemCollectionGroup;
    optionsItem: DataQuantityItem;

    constructor(name: string) {
        super(name, enumOptionType.Shots);
        this.optionGroup = new DataItemCollectionGroup();
        this.optionsItem = new DataQuantityItem();
    }
}