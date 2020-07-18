import { enumOptionType } from "./OptionBaseModel"
import OptionBaseModel from "./OptionBaseModel"
import DataItemCollectionQuantity from '../DataModels/selectList/DataItemCollectionQuantity';

export default class OptionTeaModel extends OptionBaseModel {

    optionItem: DataItemCollectionQuantity;

    constructor(name: string) {
        super(name, enumOptionType.Tea);
        this.optionItem = new DataItemCollectionQuantity();
    }

}