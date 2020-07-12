import DataItemCollectionGroupParser            from "../dataModelParsers/DataItemCollectionGroupParser";
import OptionDairyAlternativesModel             from "../../../repository/productRepository/models/options/OptionDairyAlternativesModel";

export default class ParseOptionDairyAlternatives {

    static parse(json: any): OptionDairyAlternativesModel {

        const item = new OptionDairyAlternativesModel(json.Name);

        item.optionGroup = DataItemCollectionGroupParser.parse(json.OptionsGroup);

        return item;
    }
}