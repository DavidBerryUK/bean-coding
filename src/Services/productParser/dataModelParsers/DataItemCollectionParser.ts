import DataItemCollection                       from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollection";
import DataItemParser                           from "./DataItemParser";

export default class DataItemCollectionParser {

    static parse(json: any) : DataItemCollection {
        
        const data = new DataItemCollection();

        data.isMandatory = json.IsMandatory;
        data.name = json.Name;
        data.collectionItems = DataItemParser.parseArray(json.CollectionItems);

        return data;
    }
}