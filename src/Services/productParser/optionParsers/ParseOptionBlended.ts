import DataQuantityItemCollectionGroupParser    from "../dataModelParsers/DataQuantityItemCollectionGroupParser";
import OptionBlendedModel                       from "../../../repository/productRepository/models/options/OptionBlendedModel";

export default class ParseOptionBlended {

    static parse(json: any): OptionBlendedModel {    

        const data = new OptionBlendedModel(json.Name);
        data.optionsGroup = DataQuantityItemCollectionGroupParser.parse(json.OptionsGroup.GroupItems);

        return data;
    }
}