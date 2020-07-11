import DataItemCollectionQuantityGroup          from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantityGroup";
import DataItemCollectionQuantityParser         from "./DataItemCollectionQuantityParser";

export default class DataItemCollectionQuantityGroupParser {

    static parse(json: any): DataItemCollectionQuantityGroup {        

        const data = new DataItemCollectionQuantityGroup();
        data.name = json.Name;   
        data.groupItems = DataItemCollectionQuantityParser.parseArray(json.GroupItems)

        return data;
    }
}