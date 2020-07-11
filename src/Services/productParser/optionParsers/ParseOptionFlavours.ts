import DataItemCollectionQuantityGroupsParser   from "../dataModelParsers/DataItemCollectionQuantityGroupsParser";
import OptionFlavoursModel                      from "../../../repository/productRepository/models/options/OptionFlavoursModel";

export default class ParseOptionFlavours {

    static parse(json: any): OptionFlavoursModel {

        const item = new OptionFlavoursModel(json.Name);

        item.optionsGroups = DataItemCollectionQuantityGroupsParser.parse(json.OptionsGroups.Groups);

        return item;
    }
}