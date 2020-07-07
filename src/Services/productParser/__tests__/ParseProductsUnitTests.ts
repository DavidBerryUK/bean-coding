import ProductParser from "../ProductParser";
import ProductRepository from "../../../repository/productRepository/ProductRepository";

it('extract product json to strong model', () => {

    const productRepository = new ProductRepository();
    const americanoList = productRepository.getAmericano();
    const americano = americanoList[0];

    var parser = new ProductParser();    
    var products = parser.parseJsonItem(americano)
        
});