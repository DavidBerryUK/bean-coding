import DataQuantityItemCollection               from "../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItemCollection";

export default class DataQuantityItemCollectionParser {

    static parse(json: any): DataQuantityItemCollection {

        var data = new DataQuantityItemCollection();
        
        data.name = json.Name;

        return data;
    }
}