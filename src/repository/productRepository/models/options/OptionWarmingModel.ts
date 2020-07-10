import { enumOptionType }                       from "./OptionBaseModel"
import DataItemCollection                       from "../DataModels/selectList/DataItemCollection";
import OptionBaseModel                          from "./OptionBaseModel";

export default class OptionWarmingModel extends OptionBaseModel {

    optionsCollection : DataItemCollection;

    constructor(name: string) {
        super(name, enumOptionType.Warming);
        this.optionsCollection = new DataItemCollection();
    }
}