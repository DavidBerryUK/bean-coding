import OptionWarmingModel                       from "../../../repository/productRepository/models/options/OptionWarmingModel";
import DataItemCollectionParser                 from "../dataModelParsers/DataItemCollectionParser";

export default class ParseOptionWarming {
    static parse(json: any): OptionWarmingModel {

      const item = new OptionWarmingModel(json.Name);      
      item.optionsCollection = DataItemCollectionParser.parse(json.OptionsCollection);
      return item;

    }
}