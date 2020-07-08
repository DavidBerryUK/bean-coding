import RecipeModel from "../../repository/productRepository/models/RecipeModel";

export default class ParseRecipe {

    static parseCollection(json: any): Array<RecipeModel> {
        var collection = new Array<RecipeModel>();

        json.forEach((itemJson: any) => {
            const size = this.parseItem(itemJson);
            collection.push(size);
        });
        return collection;
    }

    static parseItem(json: any): RecipeModel {
        var item = new RecipeModel();
        item.name = json.Name;
        item.quantity = Number(json.Quantity);
        item.productNumber = Number(json.ProductNumber);
        return item;
    }
}