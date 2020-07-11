import DataItemCollectionQuantityGroupParser    from './DataItemCollectionQuantityGroupParser';
import DataItemCollectionQuantityGroups         from "../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantityGroups";

export default class DataItemCollectionQuantityGroupsParser {

    static parse(json: any): DataItemCollectionQuantityGroups {

        const data = new DataItemCollectionQuantityGroups();

        json.forEach((itemJson: any) => {
            const dataItem = DataItemCollectionQuantityGroupParser.parse(itemJson);
            data.groups.push(dataItem);
        });

        return data;
    }
}