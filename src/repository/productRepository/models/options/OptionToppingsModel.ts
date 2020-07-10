import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollectionGroups                 from "../DataModels/selectList/DataItemCollectionGroups";
import OptionBaseModel                          from "./OptionBaseModel";

export default class OptionToppingsModel extends OptionBaseModel {

    optionsGroups: DataItemCollectionGroups;

    constructor(name: string) {
        super(name, enumOptionType.Toppings);
        this.optionsGroups = new DataItemCollectionGroups();
    }

}