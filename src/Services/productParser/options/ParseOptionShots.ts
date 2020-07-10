import OptionShotsModel from "../../../repository/productRepository/models/options/OptionShotsModel";

export default class ParseOptionShots {
    static parse(json: any) : OptionShotsModel {
        const item = new OptionShotsModel(json.Name);
        return item;
    }
}