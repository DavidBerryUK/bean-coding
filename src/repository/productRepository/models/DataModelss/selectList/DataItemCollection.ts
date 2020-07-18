import DataItem                                 from "./DataItem";

export default class DataItemCollection {

    name: string = "";
    productNumber: number = 0;
    isMandatory: boolean = false;
    collectionItems: Array<DataItem> = new Array<DataItem>();

}