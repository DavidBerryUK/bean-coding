import { enumOptionType }                       from "./OptionBaseModel"
import OptionBaseModel                          from "./OptionBaseModel"
import DataItemCollectionGroup                  from "../DataModelss/selectList/DataItemCollectionGroup";

export default class OptionAddInModel extends OptionBaseModel {

    optionsGroup: DataItemCollectionGroup;

    constructor(name: string) {
        super(name, enumOptionType.AddIn)
        this.optionsGroup = new DataItemCollectionGroup();
    }

}