import OptionToppingsModel from "../../../repository/productRepository/models/options/OptionToppingsModel";


export default class ParseOptionToppings {
    static parse(json: any) : OptionToppingsModel {
        const item = new OptionToppingsModel();
        item.name = json.Name;
        item.optionType = json.OptionType;
        return item;
    }
}