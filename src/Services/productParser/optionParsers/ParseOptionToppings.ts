import OptionToppingsModel                      from "../../../repository/productRepository/models/options/OptionToppingsModel";

export default class ParseOptionToppings {
    static parse(json: any): OptionToppingsModel {
        const item = new OptionToppingsModel(json.Name);
        return item;
    }
}