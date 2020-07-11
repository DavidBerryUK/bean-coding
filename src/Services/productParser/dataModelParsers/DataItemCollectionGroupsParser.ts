import DataItemCollectionGroupParser            from "./DataItemCollectionGroupParser"
import DataItemCollectionGroups                 from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionGroups";

export default class DataItemCollectionGroupsParser {

    static parse(json: any): DataItemCollectionGroups {
        
        const data = new DataItemCollectionGroups();        

         json.forEach((jsonItem:any) => {
             const dataItem = DataItemCollectionGroupParser.parse(jsonItem);
             data.groups.push(dataItem);
         });
    
        return data;
    }

}