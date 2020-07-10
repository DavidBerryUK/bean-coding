import DataItem                                 from "./DataItem";

export default class DataItemCollectionQuantity {

    name: string = "";
    isMandatory: boolean = false;
    productNumber: number = 0;
    quantityRequired: number = 0;
    items: Array<DataItem> = new Array<DataItem>();

}