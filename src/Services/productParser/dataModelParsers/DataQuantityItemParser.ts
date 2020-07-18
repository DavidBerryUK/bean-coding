import DataQuantityItem                         from "../../../repository/productRepository/models/DataModelss/itemAndQuantity/DataQuantityItem";

export default class DataQuantityItemParser {

    static parse(json: any): DataQuantityItem {

        const data = new DataQuantityItem();
        
        data.productNumber = Number(json.ProductNumber);
        data.name = json.Name;
        data.quantity = 0;

        return data;
    }

    static parseArray(jsonArray: any): Array<DataQuantityItem> {

        const data = new Array<DataQuantityItem>();
        
        jsonArray.forEach((jsonItem: any) => {
            const dataItem = this.parse(jsonItem);
            data.push(dataItem);
        });

        return data;
    }
}