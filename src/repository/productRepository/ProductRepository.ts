import CategoryModel                            from "../categoryRepository/models/CategoryModel";
import ProductModel                             from "./models/ProductModel";
import ProductParser                            from "./data/ProductParser";

const repositoryDelayMs = 0;

export default class ProductRepository {

    // get all cateories with artifical delay 
    //
    async getAll(): Promise<Array<ProductModel>> {

        var promise = new Promise<Array<ProductModel>>((resolve, reject) => {
            
            var allProducts = this.getAllProducts();

            // return data after simulated API delay
            setTimeout(() => {
                resolve(allProducts)
            }, repositoryDelayMs);
        });

        return promise;
    }

    async getProductsForCategory(category: CategoryModel): Promise<Array<ProductModel>> {
        var promise = new Promise<Array<ProductModel>>((resolve, reject) => {            
            var allProducts = this.getAllProducts();
            var filteredProducts = allProducts.filter((item) => { return category.products.indexOf(item.productNumber) >= 0   });
            // return data after simulated API delay
            setTimeout(() => {
                resolve(filteredProducts)
            }, repositoryDelayMs);
        });
        return promise;
    }


    private getAllProducts() : Array<ProductModel> {        
        var productParser = new ProductParser();
        var allProducts = productParser.parseProducts();
        return allProducts;

    }
}