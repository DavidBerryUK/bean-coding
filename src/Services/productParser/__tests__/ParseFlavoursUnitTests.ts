import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import OptionFlavoursModel                      from '../../../repository/productRepository/models/options/OptionFlavoursModel';
import optionsJson                              from './data/optionFlavours.json';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options with flavour model', () => {

    // convert json to strongly typed object
    //
    const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Flavours");
    expect(option.optionType).toBe(enumOptionType.Flavours);

    // specific model testing
    //
    const data = option as OptionFlavoursModel;
    expect(data).not.toBeNull();

    // OptionsItem
    //
    expect(data.optionsGroups).not.toBeNull();    
    expect(data.optionsGroups.groups).not.toBeNull();
    expect(data.optionsGroups.groups.length).toBe(2);

    const g1 = data.optionsGroups.groups[0];
    const g2 = data.optionsGroups.groups[1];

    // high level groups
    //
    expect(g1.name).toBe("Syrups");
    expect(g1.groupItems).not.toBeNull();
    expect(g1.groupItems.length).toBe(11);

    expect(g2.name).toBe("Sauces");
    expect(g2.groupItems).not.toBeNull();
    expect(g2.groupItems.length).toBe(2);

    // Syrups details
    //
    expect(g1.groupItems[0].name).toBe("Almond Syrup");
    expect(g1.groupItems[1].name).toBe("Caramel Syrup");
    expect(g1.groupItems[2].name).toBe("Sugar Free Caramel Syrup");
    expect(g1.groupItems[3].name).toBe("Cinnamon Dolce Syrup");
    expect(g1.groupItems[4].name).toBe("Simple Syrup");
    expect(g1.groupItems[5].name).toBe("Hazelnut Syrup");
    expect(g1.groupItems[6].name).toBe("Sugar Free Hazelnut Syrup");
    expect(g1.groupItems[7].name).toBe("Mango Syrup");
    expect(g1.groupItems[8].name).toBe("Peppermint Syrup");
    expect(g1.groupItems[9].name).toBe("Vanilla Syrup");
    expect(g1.groupItems[10].name).toBe("Sugar Free Vanilla Syrup");    

    expect(g1.groupItems[0].productNumber).toBe(2121360);
    expect(g1.groupItems[1].productNumber).toBe(91);
    expect(g1.groupItems[2].productNumber).toBe(1211);
    expect(g1.groupItems[3].productNumber).toBe(93);
    expect(g1.groupItems[4].productNumber).toBe(94);
    expect(g1.groupItems[5].productNumber).toBe(96);
    expect(g1.groupItems[6].productNumber).toBe(107);
    expect(g1.groupItems[7].productNumber).toBe(2121333);
    expect(g1.groupItems[8].productNumber).toBe(100);
    expect(g1.groupItems[9].productNumber).toBe(111);
    expect(g1.groupItems[10].productNumber).toBe(109);    

    // Sauses
    //
    expect(g2.groupItems[0].name).toBe("Mocha Sauce");
    expect(g2.groupItems[1].name).toBe("White Chocolate Mocha Sauce");
    expect(g2.groupItems[0].productNumber).toBe(650);
    expect(g2.groupItems[1].productNumber).toBe(112);

    // Syrup detail options items
    const i1 = g1.groupItems[0];
    expect(i1).not.toBeNull();
    expect(i1.items).not.toBeNull();
    expect(i1.items.length).toBe(3);
    expect(i1.items[0].value).toBe("Almond Syrup");
    expect(i1.items[1].value).toBe("Substitute Almond Syrup");
    expect(i1.items[2].value).toBe("No Almond Syrup");

    const i2 = g1.groupItems[1];
    expect(i2).not.toBeNull();
    expect(i2.items).not.toBeNull();
    expect(i2.items.length).toBe(3);
    expect(i2.items[0].value).toBe("Caramel Syrup");
    expect(i2.items[1].value).toBe("Substitute Caramel Syrup");
    expect(i2.items[2].value).toBe("No Caramel Syrup");

    // Sauces 
    const i3 = g2.groupItems[0];
    expect(i3).not.toBeNull();
    expect(i3.items).not.toBeNull();
    expect(i3.items.length).toBe(2);
    expect(i3.items[0].value).toBe("Mocha Sauce");
    expect(i3.items[1].value).toBe("Substitute Mocha Sauce");

    const i4 = g2.groupItems[1];
    expect(i4).not.toBeNull();
    expect(i4.items).not.toBeNull();
    expect(i4.items.length).toBe(2);
    expect(i4.items[0].value).toBe("White Chocolate Mocha Sauce");
    expect(i4.items[1].value).toBe("Substitute White Chocolate Mocha Sauce");
    

});
