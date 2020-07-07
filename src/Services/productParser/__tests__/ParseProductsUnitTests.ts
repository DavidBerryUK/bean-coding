import ProductParser from "../ProductParser";
import ProductRepository from "../../../repository/productRepository/ProductRepository";

it('extract product json to strong model', () => {

    const productRepository = new ProductRepository();
    const americanoList = productRepository.getAmericano();

    const parser = new ProductParser();    
    const products = parser.parseJsonItems(americanoList);
    const product = products[0];


    expect(product.ProductId).toBe(406);
    expect(product.name).toBe("Caffe Americano");
        
});