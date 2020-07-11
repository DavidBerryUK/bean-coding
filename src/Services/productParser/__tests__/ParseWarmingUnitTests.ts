import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import optionsJson                              from './data/optionWarming.json';
import ParseOptions                             from '../optionParsers/ParseOptions';
import OptionWarmingModel                       from '../../../repository/productRepository/models/options/OptionWarmingModel';

it('parse options with warming model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Warming");
    expect(option.optionType).toBe(enumOptionType.Warming);

    // specific model testing
    //
    const data = option as OptionWarmingModel;
    expect(data).not.toBeNull();
    expect(data.optionsCollection).not.toBeNull();    
    expect(data.optionsCollection.collectionItems).not.toBeNull();
    expect(data.optionsCollection.collectionItems.length).toBe(2);

    const items = data.optionsCollection.collectionItems;

    expect(items[0].value).toBe("Not Warmed");
    expect(items[0].productNumber).toBe(1193);
    expect(items[1].value).toBe("Warmed");
    expect(items[1].productNumber).toBe(1179);
});
