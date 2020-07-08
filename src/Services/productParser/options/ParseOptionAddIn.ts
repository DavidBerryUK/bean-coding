import OptionAddInModel from "../../../repository/productRepository/models/options/OptionAddInModel";

export default class ParseOptionAddIn {
    static parse(json: any) : OptionAddInModel {
        const item = new OptionAddInModel();
        item.name = json.Name;
        item.optionType = json.OptionType;
        return item;
    }
}