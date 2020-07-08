import OptionFlavoursModel from "../../../repository/productRepository/models/options/OptionFlavoursModel";

export default class ParseOptionFlavours {
    static parse(json: any) : OptionFlavoursModel {
        const item = new OptionFlavoursModel();
        item.name = json.Name;
        item.optionType = json.OptionType;
        return item;
    }
}