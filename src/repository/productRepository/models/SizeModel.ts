import IngredientModel                          from "./IngredientModel";
import NutritionModel                           from "./nutrition/NutritionModel";
import RecipeModel                              from "./RecipeModel";

export default class SizeModel {
    name: string = "";
    price: number = 0;
    recipeList: Array<RecipeModel> = new Array<RecipeModel>();
    nutrition: NutritionModel = new NutritionModel();
    ingredients : Array<IngredientModel> = new Array<IngredientModel>();
}