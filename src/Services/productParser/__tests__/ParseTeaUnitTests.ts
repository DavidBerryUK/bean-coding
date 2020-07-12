import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import optionsJson                              from './data/optionTea.json';
import OptionTeaModel                           from '../../../repository/productRepository/models/options/OptionTeaModel';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options tea model', () => {

    // convert json to strongly typed object
    
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Tea");
    expect(option.optionType).toBe(enumOptionType.Tea);

    // specific model testing
    //
    const data = option as OptionTeaModel;
    expect(data).not.toBeNull();

    expect(data.optionItem).not.toBeNull();
    expect(data.optionItem.name).toBe("Chai");
    expect(data.optionItem.isMandatory).toBeTruthy();
    expect(data.optionItem.productNumber).toBe(92);
    expect(data.optionItem.items).not.toBeNull();
    expect(data.optionItem.items.length).toBe(2);
    expect(data.optionItem.items[0].value).toBe("Chai");
    expect(data.optionItem.items[1].value).toBe("Substitute Chai");

    
});
