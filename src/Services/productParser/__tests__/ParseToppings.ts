import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';

import optionsJson                              from './data/optionToppings.json';
import ParseOptions                             from '../optionParsers/ParseOptions';
import OptionToppingsModel from '../../../repository/productRepository/models/options/OptionToppingsModel';

it('parse options with flavour model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Toppings");
    expect(option.optionType).toBe(enumOptionType.Toppings);

    // specific model testing
    //
    const data = option as OptionToppingsModel;
    expect(data).not.toBeNull();

    // OptionsItem
    //
    expect(data.optionsGroups).not.toBeNull();    
    expect(data.optionsGroups.groups).not.toBeNull();
    expect(data.optionsGroups.groups.length).toBe(2);

    const g1 = data.optionsGroups.groups[0];
    const g2 = data.optionsGroups.groups[1];
   
    

});
