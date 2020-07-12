import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionSandwichModel                      from '../../../repository/productRepository/models/options/OptionSandwichModel';
import optionsJson                              from './data/optionSandwhich.json';
import ParseOptions                             from '../optionParsers/ParseOptions';
import { da } from 'date-fns/locale';

it('parse options sandwich model', () => {

    // convert json to strongly typed object
    
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Sandwich Options");
    expect(option.optionType).toBe(enumOptionType.Sandwich);

    // specific model testing
    //
    const data = option as OptionSandwichModel;
    expect(data).not.toBeNull();
    expect(data.optionGroups).not.toBeNull();
    expect(data.optionGroups.groups).not.toBeNull();
    expect(data.optionGroups.groups.length).toBe(1);

    const g1 = data.optionGroups.groups[0];

    expect(g1.name).toBe("Sauces");

    expect(g1.groupItems.length).toBe(2);
    const i1 = g1.groupItems[0];
    const i2 = g1.groupItems[1];

    expect(i1.name).toBe("HP Sauce");
    expect(i1.items.length).toBe(1);
    expect(i1.items[0].value).toBe("HP Sauce");

    expect(i2.name).toBe("Ketchup");
    expect(i2.items.length).toBe(1);
    expect(i2.items[0].value).toBe("Ketchup");

    

    
});
