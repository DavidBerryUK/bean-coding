import DataItem                                 from "../../../repository/productRepository/models/DataModels/selectList/DataItem";

export default class DataItemParser {

    static parse(json: any): DataItem {
        const item = new DataItem();

        item.value = json.Value
        item.productNumber = Number(json.ProductNumber);

        return item;
    }

    static parseArray(json: any): Array<DataItem> {
        const array = new Array<DataItem>();

        json.forEach((item: any) => {

            array.push(this.parse(item));
        });


        return array;
    }

}