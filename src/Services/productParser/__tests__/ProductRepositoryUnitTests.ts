import ProductRepository from "../../../repository/productRepository/ProductRepository";

it('extract product json to strong model', () => {

    const productRepository = new ProductRepository();
    var products = productRepository.getAmericano();
    
    // test that the products were read
    expect(products.length).toBe(2);

    // test 3rd product in more details
    const product = products[0];
    const options = product.options;
    const sizes = product.sizes;
    const recipe = product.sizes[0].recipeList;

    expect(product.name).toBe("Caffe Americano");
    expect(product.description).toBe("Espresso shots are topped with hot water to produce a light layer of cream in true European style.");
    expect(product.ImageThumbnailUri).toBe('1e021d70f2a744cdb7585ad5976f9816.jpg');
    expect(product.ImageFullSizeUri).toBe('02e313dd98204b7380730e96f8d50c38.jpg');

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


    expect(recipe.length).toBe(2);
    const r1 = recipe[0];
    const r2 = recipe[1];    

    expect(r1.productNumber).toBe(82);
    expect(r1.name).toBe("Shots");
    expect(r1.quantity).toBe(1);
    

    expect(r2.productNumber).toBe(42);
    expect(r2.name).toBe("Water");
    expect(r2.quantity).toBe(1);
});