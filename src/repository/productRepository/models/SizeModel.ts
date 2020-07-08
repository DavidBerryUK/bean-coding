import RecipeModel from "./RecipeModel";

export default class SizeModel {
    name: string = "";
    price: number = 0;
    recipeList : Array<RecipeModel> = new Array<RecipeModel>();
}