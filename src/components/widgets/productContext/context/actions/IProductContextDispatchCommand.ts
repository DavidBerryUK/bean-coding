import { ProductContexttProps }                 from "../productContext";

export enum EnumProductContextAction {
    Update,
}

export interface IProductContextDispatchCommand {
    readonly commandType: EnumProductContextAction;
    updateState(state: ProductContexttProps): ProductContexttProps;
}