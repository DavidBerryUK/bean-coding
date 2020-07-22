export enum EnumProductContextAction {
    Update,    
}

export interface IProductContextDispatchCommand {
    readonly commandType: EnumProductContextAction;
}