import CategoryModel                            from "../categoryRepository/models/CategoryModel";
import JsonLoaderAmericano                      from "./loaders/JsonLoaderAmericano";
import JsonLoaderBagels                         from "./loaders/JsonLoaderBagels";
import JsonLoaderBrewedTea                      from "./loaders/JsonLoaderBrewedTea";
import JsonLoaderCakesAndPies                   from "./loaders/JsonLoaderCakesAndPies";
import JsonLoaderCappuccino                     from "./loaders/JsonLoaderCappuccino";
import JsonLoaderCoffeeFrappuccino              from "./loaders/JsonLoaderCoffeeFrappuccino";
import JsonLoaderCookiesAndBrownies             from "./loaders/JsonLoaderCookiesAndBrownies";
import JsonLoaderCreamFrappuccino               from "./loaders/JsonLoaderCreamFrappuccino";
import JsonLoaderCroissants                     from "./loaders/JsonLoaderCroissants";
import JsonLoaderEspresso                       from "./loaders/JsonLoaderEspresso";
import JsonLoaderLatte                          from "./loaders/JsonLoaderLatte";
import JsonLoaderMacchiato                      from "./loaders/JsonLoaderMacchiato";
import JsonLoaderMocha                          from "./loaders/JsonLoaderMocha";
import JsonLoaderMuffinsAndBreads               from "./loaders/JsonLoaderMuffinsAndBreads";
import JsonLoaderSalads                         from "./loaders/JsonLoaderSalad";
import JsonLoaderSandwhiches                    from "./loaders/JsonLoaderSandwhiches";
import JsonLoaderScones                         from "./loaders/JsonLoaderScones";
import JsonLoaderWraps                          from "./loaders/JsonLoaderWraps";
import ProductModel                             from "./models/ProductModel";
import ProductParser                            from "../../Services/productParser/ProductParser";

/**
 *  Fake Repository - ideally all this would be on server / database,
 *  but this makes it easy to experiment
 */
export default class ProductRepository {

    private productParser = new ProductParser();
    private static cachedProducts : Array<ProductModel> = new Array<ProductModel>();

    public loadAll() {

        if ( ProductRepository.cachedProducts.length === 0) {

            var products = new Array<ProductModel>();
            products = products.concat(this.getAmericano());
            products = products.concat(this.getBagels());
            products = products.concat(this.getBrewedTea());
            products = products.concat(this.getCakesAndPies());
            products = products.concat(this.getCappuccino());
            products = products.concat(this.getCoffeeFrappuccino());
            products = products.concat(this.getrCookiesAndBrownies());
            products = products.concat(this.getCreamFrappuccino());
            products = products.concat(this.getCroissants());
            products = products.concat(this.getEspresso());
            products = products.concat(this.getLatte());
            products = products.concat(this.getMacchiato());
            products = products.concat(this.getMocha());
            products = products.concat(this.getMuffinsAndBreads());
            products = products.concat(this.getSalads());
            products = products.concat(this.getSandwhiches());
            products = products.concat(this.getScones());
            products = products.concat(this.getWraps());

            ProductRepository.cachedProducts = products;
        }        

        return ProductRepository.cachedProducts;
    }

    // this would be a direct database calls, again this is 
    // just to support the rest of the front end application
    public getProductbyId(productId: number) : ProductModel| null {
        var all = this.loadAll();
        var products = all.filter((item) => item.ProductId === productId);
        if ( products.length >= 1) {
            return products[0];
        }
        return null;
    }

    public getProductsForCategory(category: CategoryModel): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCappuccino.load())
    }

    public getCappuccino(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCappuccino.load())
    }

    public getCoffeeFrappuccino(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCoffeeFrappuccino.load())
    }

    public getrCookiesAndBrownies(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCookiesAndBrownies.load())
    }

    public getCreamFrappuccino(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCreamFrappuccino.load())
    }

    public getCroissants(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCroissants.load())
    }

    public getEspresso(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderEspresso.load())
    }

    public getLatte(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderLatte.load())
    }

    public getMacchiato(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderMacchiato.load())
    }

    public getMocha(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderMocha.load())
    }

    public getMuffinsAndBreads(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderMuffinsAndBreads.load())
    }

    public getSalads(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderSalads.load())
    }

    public getSandwhiches(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderSandwhiches.load())
    }

    public getScones(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderScones.load())
    }

    public getWraps(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderWraps.load())
    }

    public getBrewedTea(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderBrewedTea.load())
    }

    public getAmericano(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderAmericano.load());
    }

    public getBagels(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderBagels.load());
    }

    public getCakesAndPies(): Array<ProductModel> {
        return this.productParser.parseCollection(JsonLoaderCakesAndPies.load());
    }

}