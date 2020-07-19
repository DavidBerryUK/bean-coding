import NutritionFactModel                       from "../../repository/productRepository/models/nutrition/NutritionFactModel";

export default class ParseNutritionFact {

    static parse(json: any): NutritionFactModel {

        var data = new NutritionFactModel();

        data.name = json.Name;
        if (json.Value) {
            data.value = json.Value;
        }
        if (json.DailyValue) {
            data.dailyValue = json.DailyValue;
        }
        if (json.DailyPercentage) {
            data.dailyPercentage = json.DailyPercentage;
        }
        if (json.SubFacts) {
            data.subFacts = this.parseArray(json.SubFacts);
        }
        return data;
    }

    static parseArray(jsonArray: any): Array<NutritionFactModel> {

        var dataArray = new Array<NutritionFactModel>();        

        if (jsonArray) {            

            jsonArray.forEach((json: any) => {                                
                const data = this.parse(json);
                dataArray.push(data);
            })
        }

        return dataArray;
    }


}