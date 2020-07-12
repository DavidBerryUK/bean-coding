import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionBlendedModel                       from '../../../repository/productRepository/models/options/OptionBlendedModel';
import optionsJson                              from './data/optionBlended.json';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options Blended model', () => {

    // convert json to strongly typed object
    
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Blended Options");
    expect(option.optionType).toBe(enumOptionType.Blended);

    // specific model testing
    //
    const data = option as OptionBlendedModel;
    expect(data).not.toBeNull();

    expect(data.optionsGroup).not.toBeNull();
    expect(data.optionsGroup.groupItems).not.toBeNull();
    expect(data.optionsGroup.groupItems.length).toBe(2);
    
    const g1 = data.optionsGroup.groupItems[0];
    const g2 = data.optionsGroup.groupItems[1];

    expect(g1.name).toBe("Blended Add-Ins");
    expect(g1.collectionItems).not.toBeNull();
    expect(g1.collectionItems.length).toBe(1);
    expect(g1.collectionItems[0].name).toBe("Java Chips");
    expect(g1.collectionItems[0].productNumber).toBe(46);

    expect(g2.name).toBe("Frappuccino Roast");
    expect(g2.collectionItems).not.toBeNull();
    expect(g2.collectionItems.length).toBe(1);
    expect(g2.collectionItems[0].productNumber).toBe(184);
    expect(g2.collectionItems[0].name).toBe("Frappuccino Roast");        
});
