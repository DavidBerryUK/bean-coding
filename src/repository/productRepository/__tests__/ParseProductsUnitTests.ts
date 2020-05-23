import ProductParser from "../ProductParser";

it('extract product json to strong model', () => {
    var parser = new ProductParser();    
    var products = parser.parseProducts();
    
    
    // test that the products were read
    expect(products.length).toBe(18);

    // test 3rd product in more details
    const product = products[2];
    const options = product.options;
    const sizes = product.sizes;

    expect(product.name).toBe("Caff� Americano");
    expect(product.description).toBe("Espresso shots are topped with hot water to produce a light layer of crema in true European style.");
    expect(product.filenameThumbnail).toBe('1e021d70f2a744cdb7585ad5976f9816.jpg');
    expect(product.filenameLarge).toBe('02e313dd98204b7380730e96f8d50c38.jpg');

    expect(sizes.length).toBe(4);
    expect(sizes[0].name).toBe('Short');
    expect(sizes[1].name).toBe('Tall');
    expect(sizes[2].name).toBe('Grande');
    expect(sizes[3].name).toBe('Venti');

    expect(options.length).toBe(4);
    expect(options[0].name).toBe("Shot Options");
    expect(options[1].name).toBe("Add-ins");
    expect(options[2].name).toBe("Flavours");
    expect(options[3].name).toBe("Toppings");
    
});