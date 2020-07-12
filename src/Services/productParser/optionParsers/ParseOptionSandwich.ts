import DataItemCollectionQuantityGroupsParser   from "../dataModelParsers/DataItemCollectionQuantityGroupsParser";
import OptionSandwichModel                      from "../../../repository/productRepository/models/options/OptionSandwichModel";

export default class ParseOptionSandwich {

    static parse(json: any): OptionSandwichModel {

        const item = new OptionSandwichModel(json.Name);

        item.optionGroups = DataItemCollectionQuantityGroupsParser.parse(json.OptionsGroups.Groups);

        return item;
    }
}