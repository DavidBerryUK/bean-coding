import NutritionAdditionalModel from "./NutritionAdditionalModel";

export default class NutritionModel {

    servingSizeDisplayName : string = "";
    servingSizeValue : string = "";

    caloriesDisplayName : string = "";
    caloriesValue : string = "";

    caloriesFromFatDisplayName : string = "";
    caloriesFromFatValue : string = "";

    additional : Array<NutritionAdditionalModel> = new Array<NutritionAdditionalModel>();
}