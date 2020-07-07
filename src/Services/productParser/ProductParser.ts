import ProductModel from "../../repository/productRepository/models/ProductModel";

export default class ProductParser {

    parseJsonArray(jsonArray: Array<object>): Array<ProductModel> {
        var productsList = new Array<ProductModel>();

        jsonArray.forEach(jsonItem => {
            const products = this.parseJsonItem(jsonItem);
            productsList = productsList.concat(products);

        });
        return productsList;
    }

    parseJsonItem(json: any): Array<ProductModel> {
        var products = new Array<ProductModel>();

        json.forEach((productJson: any) => {
            var product = this.extractProduct(productJson);
            products.push(product);
        });

        return products;
    }

    private extractProduct(json: any): ProductModel {
        var product = new ProductModel();
        product.name = json.name;
        product.productNumber = json.productNumber;
        product.description = json.description;

        product.filenameThumbnail = json.assets.thumbnail.large.uri;
        if (json.assets.fullSize) {
            product.filenameLarge = json.assets.fullSize.uri;
        }

        return product;
    }
}
