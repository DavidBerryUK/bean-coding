import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionButterAndSpreadsModel              from '../../../repository/productRepository/models/options/OptionButterAndSpreadsModel';
import optionsJson                              from './data/optionButtersAndSpreads.json';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options with butters and spreads model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Butter & Spreads");
    expect(option.optionType).toBe(enumOptionType.ButterAndSpreads);

    // specific model testing
    //
    const data = option as OptionButterAndSpreadsModel;
    expect(data).not.toBeNull();
    expect(data.optionsCollection).not.toBeNull();    
    expect(data.optionsCollection.collectionItems).not.toBeNull();

    const items = data.optionsCollection.collectionItems;
    expect(items.length).toBe(2);

    expect(items[0].name).toBe("Butter");
    expect(items[0].productNumber).toBe(1189);

    expect(items[1].name).toBe("Plain Cream Cheese");
    expect(items[1].productNumber).toBe(1190);
});
