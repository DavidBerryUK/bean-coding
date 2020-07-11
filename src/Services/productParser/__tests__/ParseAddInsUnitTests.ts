import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionAddInModel                         from '../../../repository/productRepository/models/options/OptionAddInModel';
import optionsJson                              from './data/optionAddIns.json';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options with add-ins model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Add-ins");
    expect(option.optionType).toBe(enumOptionType.AddIn);

    // specific model testing
    //
    const data = option as OptionAddInModel;
    expect(data).not.toBeNull();
    expect(data.optionsGroup).not.toBeNull();
    expect(data.optionsGroup.groupItems).not.toBeNull();
    expect(data.optionsGroup.groupItems.length).toBe(10);

    const a1 = data.optionsGroup.groupItems[0];
    const a2 = data.optionsGroup.groupItems[1];
    const a3 = data.optionsGroup.groupItems[2];
    const a4 = data.optionsGroup.groupItems[3];
    const a5 = data.optionsGroup.groupItems[4];
    const a6 = data.optionsGroup.groupItems[5];
    const a7 = data.optionsGroup.groupItems[6];
    const a8 = data.optionsGroup.groupItems[7];
    const a9 = data.optionsGroup.groupItems[8];
    const a10 = data.optionsGroup.groupItems[9];

    expect(a1).not.toBeNull();
    expect(a2).not.toBeNull();
    expect(a3).not.toBeNull();
    expect(a4).not.toBeNull();
    expect(a5).not.toBeNull();
    expect(a6).not.toBeNull();
    expect(a7).not.toBeNull();
    expect(a8).not.toBeNull();
    expect(a9).not.toBeNull();
    expect(a10).not.toBeNull();
    
    expect(a1.name).toBe("Splash of Semi-Skimmed Milk");
    expect(a1.productNumber).toBe(50);
    expect(a1.collectionItems.length).toBe(3);
    expect(a1.collectionItems[0].value).toBe("Extra Splash of Semi-Skimmed Milk");
    expect(a1.collectionItems[1].value).toBe("Light Splash of Semi-Skimmed Milk");
    expect(a1.collectionItems[2].value).toBe("Splash of Semi-Skimmed Milk");

    expect(a2.name).toBe("Splash of Almond Drink");
    expect(a2.productNumber).toBe(2121966);
    expect(a2.collectionItems.length).toBe(3);
    expect(a2.collectionItems[0].value).toBe("Extra Splash of Almond Drink");
    expect(a2.collectionItems[1].value).toBe("Light Splash of Almond Drink");
    expect(a2.collectionItems[2].value).toBe("Splash of Almond Drink");

    expect(a3.name).toBe("Splash of Coconut");
    expect(a3.productNumber).toBe(873068665);
    expect(a3.collectionItems.length).toBe(5);
    expect(a3.collectionItems[0].value).toBe("Extra Splash of Coconut");
    expect(a3.collectionItems[1].value).toBe("Light Splash of Coconut");
    expect(a3.collectionItems[2].value).toBe("No Splash of Coconut");
    expect(a3.collectionItems[3].value).toBe("Splash of Coconut");
    expect(a3.collectionItems[4].value).toBe("Substitute Splash of Coconut");

});
