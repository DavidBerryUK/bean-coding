import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionQuantityGroups         from "../DataModels/selectList/DataItemCollectionQuantityGroups";
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionSandwichModel extends OptionBaseModel {

    optionGroups : DataItemCollectionQuantityGroups;

    constructor(name: string) {
        super(name, enumOptionType.Sandwich);
        this.optionGroups = new DataItemCollectionQuantityGroups();
    }
}