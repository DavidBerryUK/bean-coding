import { EnumDevelopeContextAction }            from "./IDeveloperContextDispatchCommand";
import { EnumGraphTheme }                       from "../../../ui/graphPaper/GraphTheme";
import { IDeveloperContextDispatchCommand }     from "./IDeveloperContextDispatchCommand";

export default class  CommandSetGraphTheme implements IDeveloperContextDispatchCommand
{
    readonly commandType : EnumDevelopeContextAction = EnumDevelopeContextAction.SetGraphTheme;
    readonly graphTheme : EnumGraphTheme;

    constructor(graphTheme : EnumGraphTheme) {
        this.graphTheme = graphTheme;
    }    
}