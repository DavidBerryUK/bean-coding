import OptionBaseModel                          from "../../../repository/productRepository/models/options/OptionBaseModel";
import ParseOptionAddIn                         from "./ParseOptionAddIn";
import ParseOptionBlended                       from "./ParseOptionBlended";
import ParseOptionButterAndSpreads              from "./ParseOptionButterAndSpreads";
import ParseOptionDairyAlternatives             from "./ParseOptionDairyAlternatives";
import ParseOptionFlavours                      from "./ParseOptionFlavours";
import ParseOptionShots                         from "./ParseOptionShots";
import ParseOptionTea                           from "./ParseOptionTea";
import ParseOptionToppings                      from "./ParseOptionToppings";
import ParseOptionWarming                       from "./ParseOptionWarming";

export default class ParseOptions {

    static parseCollection(json: any): Array<OptionBaseModel> {

        var collection = new Array<OptionBaseModel>();

        if ( json === undefined || json === null) {
            return collection;
        }        

        json.forEach((itemJson: any) => {
            const size = this.parseItem(itemJson);
            collection.push(size);
        });
        return collection;
    }

    static parseItem(json: any): OptionBaseModel {
        switch (json.OptionType) {
            case 'AddIn':
                return ParseOptionAddIn.parse(json);
            case 'Blended':
                return ParseOptionBlended.parse(json);
            case 'ButterAndSpreads':
                return ParseOptionButterAndSpreads.parse(json);
            case 'DairyAlternatives':
                return ParseOptionDairyAlternatives.parse(json);
            case 'Flavours':
                return ParseOptionFlavours.parse(json);
            case 'Shots':
                return ParseOptionShots.parse(json);                        
            case 'Toppings':
                return ParseOptionToppings.parse(json);
            case 'Warming':
                return ParseOptionWarming.parse(json);
            case 'Tea':
                return ParseOptionTea.parse(json);
            
        }

        throw new Error(`****  option type ${json.OptionType} not parsed  ****`);
    }
}