import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionShotsModel                         from '../../../repository/productRepository/models/options/OptionShotsModel';
import optionsJson                              from './data/optionShots.json';
import ParseOptions                             from '../options/ParseOptions';

it('parse options with shots model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option  = parsedOptions[0];
    expect(option.name).toBe("Shot Options");
    expect(option.optionType).toBe(enumOptionType.Shots);

    // specific model testing
    //
    const data = option as OptionShotsModel;
    expect(data).not.toBeNull();
    expect(data.optionsItem).not.toBeNull();
    expect(data.optionsItem.productNumber).toBe(82);
    expect(data.optionGroup.name).toBe("Shots");

});
