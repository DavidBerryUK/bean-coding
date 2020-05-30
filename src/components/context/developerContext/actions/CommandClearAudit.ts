import { EnumDevelopeContextAction }            from "./IDeveloperContextDispatchCommand";
import { IDeveloperContextDispatchCommand }     from "./IDeveloperContextDispatchCommand";

export default class  CommandClearAudit implements IDeveloperContextDispatchCommand
{
    readonly commandType: EnumDevelopeContextAction = EnumDevelopeContextAction.ClearAudit;
}