import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionGroup                  from "../DataModelss/selectList/DataItemCollectionGroup";
import DataQuantityItem                         from "../DataModelss/itemAndQuantity/DataQuantityItem";
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