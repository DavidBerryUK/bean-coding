import DataItem                                 from "../../../repository/productRepository/models/DataModelss/selectList/DataItem";

export default class DataItemParser {

    static parse(json: any): DataItem {

        const data = new DataItem();

        data.value = json.Value
        if ( json.ProductNumber ) {
            data.productNumber = Number(json.ProductNumber);
        }

        return data;
    }

    static parseArray(json: any): Array<DataItem> {

        const data = new Array<DataItem>();
        
        json.forEach((itemJson: any) => {
            const dataItem = this.parse(itemJson);
            data.push(dataItem);
        });

        return data;
    }

}