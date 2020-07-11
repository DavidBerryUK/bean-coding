import DataItemCollectionQuantity               from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantity";
import DataItemParser                           from "./DataItemParser";

export default class DataItemCollectionQuantityParser {

    static parse(json: any): DataItemCollectionQuantity {

        const data = new DataItemCollectionQuantity();

        data.name = json.Name;

        if (json.ProductNumber) {
            data.productNumber = json.ProductNumber;
        }
        if (json.QuantityRequired) {
            data.quantityRequired = json.QuantityRequired;
        }
        if (json.isMandatory) {
            data.isMandatory = json.isMandatory;
        }
        
        data.items = DataItemParser.parseArray(json.Items);

        return data;
    }

    static parseArray(json: any): Array<DataItemCollectionQuantity> {        

        const data = new Array<DataItemCollectionQuantity>();        

        json.forEach((jsonItem: any) => {
            const dataItem = this.parse(jsonItem);
            data.push(dataItem);
        })

        return data;
    }
}