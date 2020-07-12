import DataItemCollectionQuantityParser         from "../dataModelParsers/DataItemCollectionQuantityParser";
import OptionTeaModel                           from "../../../repository/productRepository/models/options/OptionTeaModel";

export default class ParseOptionTea {

    static parse(json: any): OptionTeaModel {    

        const data = new OptionTeaModel(json.Name);
        data.optionItem = DataItemCollectionQuantityParser.parse(json.OptionsItem);

        return data;
    }
}