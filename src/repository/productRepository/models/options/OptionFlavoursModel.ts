import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionQuantityGroups         from "../DataModelss/selectList/DataItemCollectionQuantityGroups";
import OptionBaseModel                          from "./OptionBaseModel"

export default class OptionFlavoursModel extends OptionBaseModel {

    optionsGroups: DataItemCollectionQuantityGroups;

    constructor(name: string) {
        super(name, enumOptionType.Flavours);
        this.optionsGroups = new DataItemCollectionQuantityGroups()
    }

}