import DataQuantityItemCollection               from "../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItemCollection";
import DataQuantityItemParser                   from "./DataQuantityItemParser";

export default class DataQuantityItemCollectionParser {

    static parse(json: any): DataQuantityItemCollection {

        var data = new DataQuantityItemCollection();
        
        data.name = json.Name;
        data.collectionItems = DataQuantityItemParser.parseArray(json.CollectionItems);

        return data;
    }
}