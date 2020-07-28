import ParseIngredients                         from "./ParseIngredients";
import ParseNutrition                           from "./ParseNutrition";
import ParseRecipe                              from "./ParseRecipe";
import SizeModel                                from "../../repository/productRepository/models/SizeModel";

export default class ParseSize {

    static parseCollection(json: any): Array<SizeModel> {
        var collection = new Array<SizeModel>();

        json.forEach((itemJson: any) => {
            const size = this.parseItem(itemJson);
            collection.push(size);
        });
        return collection;
    }

    static parseItem(json: any): SizeModel {
        var item = new SizeModel();
        item.name = json.Name;
        item.price = Number(json.Price);
        item.recipeList = ParseRecipe.parseCollection(json.Recipe);
        item.nutrition = ParseNutrition.parse(json.Nutrition);
        item.ingredients = ParseIngredients.parseArray(json.Ingredients);
        return item;
    }
}