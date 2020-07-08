import ProductModel from "../../repository/productRepository/models/ProductModel";
import ParseSize from "./ParseSize";
import ParseOptions from "./options/ParseOptions";

export default class ProductParser {

    parseJsonArray(jsonArray: Array<object>): Array<ProductModel> {
        var productsList = new Array<ProductModel>();

        jsonArray.forEach(jsonItem => {
            const products = this.parseCollection(jsonItem);
            productsList = productsList.concat(products);

        });
        return productsList;
    }

    parseCollection(json: any): Array<ProductModel> {
        var collection = new Array<ProductModel>();
        json.forEach((productJson: any) => {
            var product = this.parseItem(productJson);
            collection.push(product);
        });
        return collection;
    }

    parseItem(json: any): ProductModel {
        var item = new ProductModel();
        item.name = json.Name;
        item.ProductId = json.ProductId;
        item.description = json.Description;
        item.ImageThumbnailUri = json.ImageThumbnailUri;
        item.ImageFullSizeUri = json.ImageFullSizeUri;
        item.sizes = ParseSize.parseCollection (json.Sizes);
        item.options = ParseOptions.parseCollection(json.Options);
        return item;
    }    

}
