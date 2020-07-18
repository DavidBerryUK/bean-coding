import { enumOptionType }                       from "./OptionBaseModel"
import OptionBaseModel                          from "./OptionBaseModel";
import DataItemCollectionGroups                 from "../DataModelss/selectList/DataItemCollectionGroups";

export default class OptionToppingsModel extends OptionBaseModel {

    optionsGroups: DataItemCollectionGroups;

    constructor(name: string) {
        super(name, enumOptionType.Toppings);
        this.optionsGroups = new DataItemCollectionGroups();
    }

}