import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionShotsModel                         from '../../../repository/productRepository/models/options/OptionShotsModel';
import optionsJson                              from './data/optionShots.json';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options with shots model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Shot Options");
    expect(option.optionType).toBe(enumOptionType.Shots);

    // specific model testing
    //
    const data = option as OptionShotsModel;
    expect(data).not.toBeNull();

    // OptionsItem
    //
    expect(data.optionsItem).not.toBeNull();
    expect(data.optionsItem.productNumber).toBe(82);
    expect(data.optionsItem.name).toBe("Shots");
    expect(data.optionsItem.quantity).toBe(0);

    // Group Items
    //
    expect(data.optionGroup).not.toBeNull();
    expect(data.optionGroup.name).toBe("");
    expect(data.optionGroup.groupItems).not.toBeNull();
    expect(data.optionGroup.groupItems.length).toBe(1);
    const groupItem = data.optionGroup.groupItems[0];
    expect(groupItem.name).toBe("Blonde or Decaf Espresso");
    expect(groupItem.isMandatory).toBeTruthy();

    expect(groupItem.collectionItems).not.toBeNull();
    expect(groupItem.collectionItems.length).toBe(3);

    const items = groupItem.collectionItems;
    expect(items[0].productNumber).toBe(87);
    expect(items[1].productNumber).toBe(2122222);
    expect(items[2].productNumber).toBe(86);

    expect(items[0].value).toBe("1/2 Decaf");
    expect(items[1].value).toBe("Blonde Espresso");
    expect(items[2].value).toBe("Decaf");


});
