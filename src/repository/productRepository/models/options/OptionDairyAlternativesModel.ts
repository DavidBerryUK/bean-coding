import { enumOptionType }                       from "./OptionBaseModel";
import OptionBaseModel                          from "./OptionBaseModel";
import DataItemCollectionGroup                  from "../DataModels/selectList/DataItemCollectionGroup";

export default class OptionDairyAlternativesModel extends OptionBaseModel {

    optionGroup: DataItemCollectionGroup;

    constructor(name:string ) {
        super(name, enumOptionType.DiaryAlternatives);
        this.optionGroup = new DataItemCollectionGroup();
    }
}