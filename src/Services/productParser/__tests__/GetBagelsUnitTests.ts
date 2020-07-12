import ProductRepository from "../../../repository/productRepository/ProductRepository";

it('get bagles', () => {

    const productRepository = new ProductRepository();

    console.log("about to get bagles");

    const bagles = productRepository.getBagels();
    
});