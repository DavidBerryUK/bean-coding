import DataItemCollectionGroupParser            from "../dataModelParsers/DataItemCollectionGroupParser";
import DataQuantityItemParser                   from "../dataModelParsers/DataQuantityItemParser";
import OptionShotsModel                         from "../../../repository/productRepository/models/options/OptionShotsModel";

export default class ParseOptionShots {

    static parse(json: any): OptionShotsModel {    

        const data = new OptionShotsModel(json.Name);
        data.optionsItem = DataQuantityItemParser .parse(json.OptionsItem);
        data.optionGroup = DataItemCollectionGroupParser.parse(json.OptionsGroup.GroupItems);

        return data;
    }
}