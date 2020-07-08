import ProductParser from "../ProductParser";
import americanoA from './data/americano.json';

it('extract product json to strong model', () => {
    
    const parser = new ProductParser();    
    const product = parser.parseItem(americanoA);
   
    // basic product
    expect(product.ProductId).toBe(406);
    expect(product.name).toBe("Caffe Americano");
    expect(product.description).toBe("Espresso shots are topped with hot water to produce a light layer of cream in true European style.");
    expect(product.ImageFullSizeUri).toBe("02e313dd98204b7380730e96f8d50c38.jpg");
    expect(product.ImageThumbnailUri).toBe("1e021d70f2a744cdb7585ad5976f9816.jpg");

    // options
    expect(product.options.length).toBe(4);
    const option1 = product.options[0];
    const option2 = product.options[1];
    const option3 = product.options[2];
    const option4 = product.options[3];

    expect(option1.name).toBe("Shot Options");
    expect(option1.optionType).toBe("Shots");
    expect(option2.name).toBe("Add-ins");
    expect(option2.optionType).toBe("AddIn");
    expect(option3.name).toBe("Flavours");
    expect(option3.optionType).toBe("Flavours");
    expect(option4.name).toBe("Toppings");
    expect(option4.optionType).toBe("Toppings");

    //sizes
    expect(product.sizes.length).toBe(4);
    expect(product.sizes[0].name).toBe("Short");
    expect(product.sizes[0].price).toBe(1.45);
    expect(product.sizes[1].name).toBe("Tall");
    expect(product.sizes[1].price).toBe(1.95);
    expect(product.sizes[2].name).toBe("Grande");
    expect(product.sizes[2].price).toBe(2.25);
    expect(product.sizes[3].name).toBe("Venti");
    expect(product.sizes[3].price).toBe(2.45);

    // recipe
    //
    const recipeShort = product.sizes[0].recipeList;
    const recipeTall = product.sizes[1].recipeList;
    const recipeGrande = product.sizes[2].recipeList;
    const recipeVenti = product.sizes[3].recipeList;

    expect(recipeShort.length).toBe(2);
    expect(recipeShort[0].name).toBe("Shots");
    expect(recipeShort[0].quantity).toBe(1);
    expect(recipeShort[0].productNumber).toBe(82);
    expect(recipeShort[1].name).toBe("Water");
    expect(recipeShort[1].quantity).toBe(1);
    expect(recipeShort[1].productNumber).toBe(42);

    expect(recipeTall.length).toBe(2);
    expect(recipeTall[0].name).toBe("Shots");
    expect(recipeTall[0].quantity).toBe(2);
    expect(recipeTall[0].productNumber).toBe(82);
    expect(recipeTall[1].name).toBe("Water");
    expect(recipeTall[1].quantity).toBe(1);
    expect(recipeTall[1].productNumber).toBe(42);

    expect(recipeGrande.length).toBe(2);
    expect(recipeGrande[0].name).toBe("Shots");
    expect(recipeGrande[0].quantity).toBe(3);
    expect(recipeGrande[0].productNumber).toBe(82);
    expect(recipeGrande[1].name).toBe("Water");
    expect(recipeGrande[1].quantity).toBe(1);
    expect(recipeGrande[1].productNumber).toBe(42);

    expect(recipeVenti.length).toBe(2);
    expect(recipeVenti[0].name).toBe("Shots");
    expect(recipeVenti[0].quantity).toBe(4);
    expect(recipeVenti[0].productNumber).toBe(82);
    expect(recipeVenti[1].name).toBe("Water");
    expect(recipeVenti[1].quantity).toBe(1);
    expect(recipeVenti[1].productNumber).toBe(42);
        
});
