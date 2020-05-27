import { EnumOptionSelectType }                 from "../enum/ProductEnums";

export default class RecipeItemModel {    
    productNumber: number = 0;    
    name : string = "";
    formCode: EnumOptionSelectType = EnumOptionSelectType.None;
    quantity: number = 0;                
    sizeCode: string = "";
}