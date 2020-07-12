import ParseOptions                             from "./optionParsers/ParseOptions";
import ParseSize                                from "./ParseSize";
import ProductModel                             from "../../repository/productRepository/models/ProductModel";

export default class ProductParser {

    parseCollection(jsonArray: any): Array<ProductModel> {
        var collection = new Array<ProductModel>();

        jsonArray.forEach((productJson: any) => {
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
        item.sizes = ParseSize.parseCollection(json.Sizes);
        item.options = ParseOptions.parseCollection(json.Options);
        return item;
    }
}
