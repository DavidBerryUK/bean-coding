import OptionShotsModel from "../../../repository/productRepository/models/options/OptionShotsModel";


export default class ParseOptionShots {
    static parse(json: any) : OptionShotsModel {
        const item = new OptionShotsModel();
        item.name = json.Name;
        item.optionType = json.OptionType;
        return item;
    }
}