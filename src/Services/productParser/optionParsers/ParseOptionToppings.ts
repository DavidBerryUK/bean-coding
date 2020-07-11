import OptionToppingsModel                      from "../../../repository/productRepository/models/options/OptionToppingsModel";
import DataItemCollectionGroupsParser           from "../dataModelParsers/DataItemCollectionGroupsParser";

export default class ParseOptionToppings {
    static parse(json: any): OptionToppingsModel {

      const item = new OptionToppingsModel(json.Name);      
      item.optionsGroups = DataItemCollectionGroupsParser.parse(json.OptionsGroups.Groups);
      return item;

    }
}