import DataItemCollectionGroup from "../../../repository/productRepository/models/DataModelss/selectList/DataItemCollectionGroup";
import DataItemCollectionParser from "./DataItemCollectionParser";

export default class DataItemCollectionGroupParser {

    static parse(json: any): DataItemCollectionGroup {

        
        const data = new DataItemCollectionGroup();

        if (json.Name) {
            data.name = json.Name;
        }

        json.GroupItems.forEach((item: any) => {
            const arrayItem = DataItemCollectionParser.parse(item);
            data.groupItems.push(arrayItem);
        });

        return data;
    }
}