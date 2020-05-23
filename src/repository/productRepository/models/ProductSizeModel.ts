import NutritionModel from "./NutritionModel";
import RecipeItemModel from "./RecipeItemModel";

export default class ProductSizeModel {
    name: string = "";
    isDefaultSize: boolean = false;
    nutrition : NutritionModel = new NutritionModel();
    recipe: Array<RecipeItemModel> = new Array<RecipeItemModel>();
    
}