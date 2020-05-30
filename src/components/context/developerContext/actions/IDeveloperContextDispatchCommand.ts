export enum EnumDevelopeContextAction {
    AddToAudit,    
    ClearAudit,
    SetGraphTheme
}
export interface IDeveloperContextDispatchCommand {
    readonly commandType: EnumDevelopeContextAction;
}