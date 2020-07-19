export default class NutritionFactModel {
    name : string = "";
    value : string = "";
    dailyValue : string = "";
    dailyPercentage : string = "";
    subFacts : Array<NutritionFactModel> = Array<NutritionFactModel>();
}