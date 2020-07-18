import DataQuantityItemCollectionGroup          from "../../../repository/productRepository/models/DataModelss/itemAndQuantity/DataQuantityItemCollectionGroup";
import DataQuantityItemCollectionParser         from "./DataQuantityItemCollectionParser";

export default class DataQuantityItemCollectionGroupParser {

    static parse(json: any): DataQuantityItemCollectionGroup {
        
        var data = new DataQuantityItemCollectionGroup();

        json.forEach((item: any) => {
            const arrayItem = DataQuantityItemCollectionParser.parse(item);
            data.groupItems.push(arrayItem);
        });

        return data;
    }

}