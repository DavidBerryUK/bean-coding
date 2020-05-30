import { EnumDevelopeContextAction }            from "./IDeveloperContextDispatchCommand";
import { IDeveloperContextDispatchCommand }     from "./IDeveloperContextDispatchCommand";

export default class  CommandAddToAudit implements IDeveloperContextDispatchCommand
{
    readonly commandType : EnumDevelopeContextAction = EnumDevelopeContextAction.AddToAudit;
    message : string;

    constructor(message: string) {
        this.message = message;
    }    
}