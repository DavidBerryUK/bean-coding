import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import optionsJson                              from './data/optionToppings.json';
import OptionToppingsModel                      from '../../../repository/productRepository/models/options/OptionToppingsModel';
import ParseOptions                             from '../optionParsers/ParseOptions';

it('parse options with Toppings model', () => {

    // convert json to strongly typed object
    
   const parsedOptions = ParseOptions.parseCollection(optionsJson.Options);

    expect(parsedOptions).not.toBeNull();
    expect(parsedOptions.length).toBe(1);

    // basic testing
    //
    const option = parsedOptions[0];
    expect(option.name).toBe("Toppings");
    expect(option.optionType).toBe(enumOptionType.Toppings);

    // specific model testing
    //
    const data = option as OptionToppingsModel;
    expect(data).not.toBeNull();

    // OptionsItem
    //
    expect(data.optionsGroups).not.toBeNull();    
    expect(data.optionsGroups.groups).not.toBeNull();
    expect(data.optionsGroups.groups.length).toBe(2);

    const g1 = data.optionsGroups.groups[0];
    const g2 = data.optionsGroups.groups[1];


    expect(g1.name).toBe("Drizzle");
    expect(g1.groupItems).not.toBeNull();
    expect(g1.groupItems.length).toBe(2);

    const g1o1 = g1.groupItems[0];
    const g1o2 = g1.groupItems[1];

    expect(g1o1.name).toBe("Caramel Drizzle");
    expect(g1o1.productNumber).toBe(126);
    expect(g1o1.collectionItems.length).toBe(2);
    expect(g1o1.collectionItems[0].value).toBe("No Caramel Drizzle");
    expect(g1o1.collectionItems[1].value).toBe("Caramel Drizzle");

    expect(g1o2.name).toBe("Mocha Drizzle");
    expect(g1o2.productNumber).toBe(127);
    expect(g1o2.collectionItems.length).toBe(2);
    expect(g1o2.collectionItems[0].value).toBe("No Mocha Drizzle");
    expect(g1o2.collectionItems[1].value).toBe("Mocha Drizzle");


    expect(g2.name).toBe("Whipped Cream");
    expect(g2.groupItems).not.toBeNull();
    expect(g2.groupItems.length).toBe(1);
   
    const g2o1 = g2.groupItems[0];
    expect(g2o1.name).toBe("Whipped Cream");
    expect(g2o1.productNumber).toBe(125);
    expect(g2o1.collectionItems.length).toBe(2);
    expect(g2o1.collectionItems[0].value).toBe("with No Whipped Cream");
    expect(g2o1.collectionItems[1].value).toBe("with Whipped Cream");
});
