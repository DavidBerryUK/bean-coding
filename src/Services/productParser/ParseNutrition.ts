import NutritionModel from "../../repository/productRepository/models/nutrition/NutritionModel";
import ParseNutritionFact from "./ParseNutritionFact";

export default class ParseNutrition {    

    static parse(json: any): NutritionModel {
        var item = new NutritionModel();

        item.serviceSize = json.ServiceSize;
        item.calories = json.Calories;
        item.caloriesFromFat = json.CaloriesFromFat;
        if ( json.Facts) {            
            item.facts = ParseNutritionFact.parseArray(json.Facts);
        }

        return item;
    }
}