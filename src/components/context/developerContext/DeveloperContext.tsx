import { Dispatch }                             from 'react';
import { EnumDevelopeContextAction }            from './actions/IDeveloperContextDispatchCommand';
import { EnumGraphTheme }                       from '../../ui/graphPaper/GraphTheme';
import { IDeveloperContextDispatchCommand }     from './actions/IDeveloperContextDispatchCommand';
import { Reducer }                              from 'react';
import AuditModel                               from '../../widgets/developmentAuditTable/models/AuditModel';
import CommandAddToAudit                        from './actions/CommandAddToAudit';
import CommandSetGraphTheme                     from './actions/CommandSetGraphTheme';
import React                                    from 'react';

export interface IDispatchObject {
    entityName: string;
}

interface DeveloperContexttProps {
    auditRows: Array<AuditModel>,
    graphTheme: EnumGraphTheme
}

const initialState: DeveloperContexttProps = {
    auditRows: new Array<AuditModel>(),
    graphTheme: EnumGraphTheme.White
};

interface InitContextProps {
    state: DeveloperContexttProps;
    dispatch: Dispatch<IDeveloperContextDispatchCommand>;
}

const reducer: Reducer<DeveloperContexttProps, IDeveloperContextDispatchCommand> = (state, command) => {

    switch (command.commandType) {

        case EnumDevelopeContextAction.AddToAudit:
            var commandAddToAudit = command as CommandAddToAudit
            var copy = state.auditRows;
            var row = copy.length + 1
            copy.unshift(new AuditModel(row, `${commandAddToAudit.message}`));
            return { ...state, auditRows: copy };

        case EnumDevelopeContextAction.ClearAudit:
            return { ...state, auditRows: new Array<AuditModel>() };

        case EnumDevelopeContextAction.SetGraphTheme:
            var commandSetGraphTheme = command as CommandSetGraphTheme;
            return { ...state, graphTheme: commandSetGraphTheme.graphTheme as EnumGraphTheme };

        default:
            return state;
    }
};

let DeveloperContext = React.createContext({} as InitContextProps);

export function DeveloperContextProvider(props: any) {

    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <DeveloperContext.Provider value={value}>{props.children}</DeveloperContext.Provider>
    );
}

export const DeveloperContextConsumer = DeveloperContext.Consumer;
export default DeveloperContext