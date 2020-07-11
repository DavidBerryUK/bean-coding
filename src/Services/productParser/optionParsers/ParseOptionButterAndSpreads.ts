import OptionButterAndSpreadsModel from "../../../repository/productRepository/models/options/OptionButterAndSpreadsModel";
import DataQuantityItemCollectionParser from "../dataModelParsers/DataQuantityItemCollectionParser";

export default class ParseOptionButterAndSpreads {

    static parse(json: any): OptionButterAndSpreadsModel {

        const item = new OptionButterAndSpreadsModel(json.Name);

        item.optionsCollection = DataQuantityItemCollectionParser.parse(json.OptionsCollection);

        return item;
    }
}