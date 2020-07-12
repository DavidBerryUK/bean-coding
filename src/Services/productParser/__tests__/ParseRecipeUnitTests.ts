import productJson from './data/chaiCreamFrappuccino.json';
import ProductParser from '../ProductParser';

it('parse options with Toppings model', () => {

    // convert json to strongly typed object

    const productParser = new ProductParser();
    const product = productParser.parseItem(productJson);

    expect(product.sizes.length).toBe(3);

    const s1 = product.sizes[0];
    const s2 = product.sizes[1];
    const s3 = product.sizes[2];

    expect(s1.name).toBe("Tall");
    expect(s2.name).toBe("Grande");
    expect(s3.name).toBe("Venti");

    expect(s1.recipeList).not.toBeNull();
    expect(s2.recipeList).not.toBeNull();
    expect(s3.recipeList).not.toBeNull();

    const r1 = s1.recipeList;
    const r2 = s2.recipeList;
    const r3 = s3.recipeList;

    // recipe tall
    expect(r1.length).toBe(5);
    const r1i1 = r1[0];
    const r1i2 = r1[1];
    const r1i3 = r1[2];
    const r1i4 = r1[3];
    const r1i5 = r1[4];

    expect(r1i1.name).toBe("Ice");
    expect(r1i1.quantity).toBe(1);
    expect(r1i1.productNumber).toBe(41);

    expect(r1i2.name).toBe("Chai");
    expect(r1i2.quantity).toBe(2);
    expect(r1i2.productNumber).toBe(92);

    expect(r1i3.name).toBe("with Whipped Cream");
    expect(r1i3.quantity).toBe(1);
    expect(r1i3.productNumber).toBe(125);

    expect(r1i4.name).toBe("Cinnamon Powder");
    expect(r1i4.productNumber).toBe(130);

    expect(r1i5.name).toBe("Whole Milk");
    expect(r1i5.quantity).toBe(1);
    expect(r1i5.productNumber).toBe(67);

    // grande
    expect(r2.length).toBe(5);
    const r2i1 = r2[0];
    const r2i2 = r2[1];
    const r2i3 = r2[2];
    const r2i4 = r2[3];
    const r2i5 = r2[4];

    expect(r2i1.name).toBe("Ice");
    expect(r2i1.quantity).toBe(1);
    expect(r2i1.productNumber).toBe(41);

    expect(r2i2.name).toBe("Chai");
    expect(r2i2.quantity).toBe(3);
    expect(r2i2.productNumber).toBe(92);

    expect(r2i3.name).toBe("with Whipped Cream");
    expect(r2i3.quantity).toBe(1);
    expect(r2i3.productNumber).toBe(125);

    expect(r2i4.name).toBe("Cinnamon Powder");
    expect(r2i4.productNumber).toBe(130);

    expect(r2i5.name).toBe("Whole Milk");
    expect(r2i5.quantity).toBe(1);
    expect(r2i5.productNumber).toBe(67);

    // venti
    expect(r3.length).toBe(5);
    const r3i1 = r3[0];
    const r3i2 = r3[1];
    const r3i3 = r3[2];
    const r3i4 = r3[3];
    const r3i5 = r3[4];

    expect(r3i1.name).toBe("Ice");
    expect(r3i1.quantity).toBe(1);
    expect(r3i1.productNumber).toBe(41);

    expect(r3i2.name).toBe("Chai");
    expect(r3i2.quantity).toBe(4);
    expect(r3i2.productNumber).toBe(92);

    expect(r3i3.name).toBe("with Whipped Cream");
    expect(r3i3.quantity).toBe(1);
    expect(r3i3.productNumber).toBe(125);

    expect(r3i4.name).toBe("Cinnamon Powder");
    expect(r3i4.productNumber).toBe(130);

    expect(r3i5.name).toBe("Whole Milk");
    expect(r3i5.quantity).toBe(1);
    expect(r3i5.productNumber).toBe(67);
});
