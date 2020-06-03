import JsonLoaderAmericano from "./loaders/JsonLoaderAmericano";
import ProductParser from "./data/ProductParser";


export default class NewProductRepository {

    public loadAllProducts() {

        const americano = JsonLoaderAmericano.load();
        const jsonItem = americano[0];

        const svc = new ProductParser();
        var productList = svc.parseJsonFile(jsonItem);
        console.log(productList);

    }

}