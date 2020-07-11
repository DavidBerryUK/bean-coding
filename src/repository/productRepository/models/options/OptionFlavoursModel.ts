import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionQuantityGroups         from "../DataModels/selectList/DataItemCollectionQuantityGroups";
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionFlavoursModel extends OptionBaseModel {

    optionsGroup: DataItemCollectionQuantityGroups;

    constructor(name: string) {
        super(name, enumOptionType.Flavours);
        this.optionsGroup = new DataItemCollectionQuantityGroups()
    }

}