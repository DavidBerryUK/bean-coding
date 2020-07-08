import OptionBaseModel from "../../../repository/productRepository/models/options/OptionBaseModel";
import ParseOptionAddIn from "./ParseOptionAddIn";
import ParseOptionFlavours from "./ParseOptionFlavours";
import ParseOptionShots from "./ParseOptionShots";
import ParseOptionToppings from "./ParseOptionToppings";

export default class ParseOptions {

    static parseCollection(json: any): Array<OptionBaseModel> {
        var collection = new Array<OptionBaseModel>();

        json.forEach((itemJson: any) => {
            const size = this.parseItem(itemJson);
            collection.push(size);
        });
        return collection;
    }

    static parseItem(json: any): OptionBaseModel {

        if ( json.OptionType === 'Shots') {
            return ParseOptionShots.parse(json);
        }

        if ( json.OptionType === 'AddIn') {
            return ParseOptionAddIn.parse(json);
        }

        if ( json.OptionType === 'Flavours') {
            return ParseOptionFlavours.parse(json);
        }

        if ( json.OptionType === 'Toppings') {
            return ParseOptionToppings.parse(json);
        }

        throw new Error(`****  option type ${json.OptionType} not parsed  ****`);
    }
}