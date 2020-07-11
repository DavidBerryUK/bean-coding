import DataQuantityItem                         from "../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItem";

export default class DataQuantityItemParser {

    static parse(json: any): DataQuantityItem {

        const item = new DataQuantityItem();
        
        item.productNumber = Number(json.ProductNumber);
        item.name = json.Name;
        item.quantity = 0;

        return item;
    }
}