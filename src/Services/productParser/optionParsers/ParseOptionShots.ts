import DataItemCollectionGroupParser            from "../dataModelParsers/DataItemCollectionGroupParser";
import DataQuantityItemParser                   from "../dataModelParsers/dataQuantityItemParser";
import OptionShotsModel                         from "../../../repository/productRepository/models/options/OptionShotsModel";

export default class ParseOptionShots {

    static parse(json: any): OptionShotsModel {
        const item = new OptionShotsModel(json.Name);
        item.optionsItem = DataQuantityItemParser.parse(json.OptionsItem);
        item.optionGroup = DataItemCollectionGroupParser.parse(json.OptionsGroup);
        return item;
    }
}