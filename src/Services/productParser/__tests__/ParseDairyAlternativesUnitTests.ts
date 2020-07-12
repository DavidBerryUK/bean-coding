import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import optionsJson                              from './data/optionDairyAlternatives.json';
import ParseOptions                             from '../optionParsers/ParseOptions';
import OptionDairyAlternativesModel             from '../../../repository/productRepository/models/options/OptionDairyAlternativesModel';

it('parse options with dairy alternatives model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Milk & Dairy Alternatives");
    expect(option.optionType).toBe(enumOptionType.DiaryAlternatives);

    // specific model testing
    //
    const data = option as OptionDairyAlternativesModel;
    expect(data).not.toBeNull();

    // OptionsItem
    //
    expect(data.optionGroup).not.toBeNull();
    expect(data.optionGroup.groupItems).not.toBeNull();
    expect(data.optionGroup.groupItems.length).toBe(2);
    
    const i1 = data.optionGroup.groupItems[0];
    const i2 = data.optionGroup.groupItems[1];

    expect(i1.name).toBe("Milk & Dairy Alternatives");
    expect(i1.collectionItems.length).toBe(7);

    expect(i1.collectionItems[0].value).toBe('Semi-Skimmed Milk');
    expect(i1.collectionItems[0].productNumber).toBe(63);
    
    expect(i1.collectionItems[1].value).toBe('Coconut');
    expect(i1.collectionItems[1].productNumber).toBe(1306);

    expect(i1.collectionItems[2].value).toBe('Skimmed Milk');
    expect(i1.collectionItems[2].productNumber).toBe(61);

    expect(i1.collectionItems[3].value).toBe('Oat Drink');
    expect(i1.collectionItems[3].productNumber).toBe(2122556);

    expect(i1.collectionItems[4].value).toBe('Soya');
    expect(i1.collectionItems[4].productNumber).toBe(64);

    expect(i1.collectionItems[5].value).toBe('Whole Milk');
    expect(i1.collectionItems[5].productNumber).toBe(67);

    expect(i1.collectionItems[6].value).toBe('Almond');
    expect(i1.collectionItems[6].productNumber).toBe(2121965);

    expect(i2.name).toBe("Temp");
    expect(i2.collectionItems.length).toBe(3);

    expect(i2.collectionItems[0].value).toBe('Extra Hot');
    expect(i2.collectionItems[0].productNumber).toBe(72);
    
    expect(i2.collectionItems[1].value).toBe('Steamed');
    expect(i2.collectionItems[1].productNumber).toBe(71);

    expect(i2.collectionItems[2].value).toBe('Warm');
    expect(i2.collectionItems[2].productNumber).toBe(70);
});

