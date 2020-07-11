import DataItemCollectionGroupParser            from "../dataModelParsers/DataItemCollectionGroupParser";
import OptionAddInModel                         from "../../../repository/productRepository/models/options/OptionAddInModel";

export default class ParseOptionAddIn {
    static parse(json: any): OptionAddInModel {
        const item = new OptionAddInModel(json.Name);        
        item.optionsGroup = DataItemCollectionGroupParser.parse(json.OptionsGroup);
        return item;
    }
}