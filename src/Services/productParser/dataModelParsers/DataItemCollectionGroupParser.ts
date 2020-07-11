import DataItemCollectionGroup                  from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionGroup";
import DataItemCollectionParser                 from "./DataItemCollectionParser";

export default class DataItemCollectionGroupParser {

    static parse(json: any) : DataItemCollectionGroup {
        const data = new DataItemCollectionGroup();
        data.name = "";

        json.GroupItems.forEach((item:any) => {
            const arrayItem = DataItemCollectionParser.parse(item);
            data.groupItems.push(arrayItem);
        });

        return data;
    }
}