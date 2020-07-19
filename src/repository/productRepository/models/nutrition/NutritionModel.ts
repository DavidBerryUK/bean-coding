import NutritionFactModel                       from "./NutritionFactModel";

export default class NutritionModel {
    serviceSize : string = "";
    calories: string = "";
    caloriesFromFat: string = "";
    facts : Array<NutritionFactModel> = Array<NutritionFactModel>();
}