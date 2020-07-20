import IngredientModel                          from "../../repository/productRepository/models/IngredientModel";

export default class ParseIngredients {

    static parseArray(json: any): Array<IngredientModel> {
        var dataArray = new Array<IngredientModel>();

        if (json === undefined || json === null) {
            return dataArray;
        }

        json.forEach((itemJson: any) => {
            const data = this.parseItem(itemJson);
            dataArray.push(data);
        });
        return dataArray;
    }

    static parseItem(json: any): IngredientModel {
        var item = new IngredientModel();
        item.name = json.Name;

        if (json.SubIngredients) {
            item.SubIngredients = this.parseArray(json.SubIngredients);
        }
        return item;
    }
}