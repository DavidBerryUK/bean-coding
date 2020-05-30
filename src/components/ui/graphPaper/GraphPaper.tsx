import "./GraphPaper.scss";
import { Box }                                  from '@material-ui/core';
import { EnumGraphTheme }                       from "./GraphTheme";
import { useContext }                           from 'react';
import CommandSetGraphTheme                     from "../../context/developerContext/actions/CommandSetGraphTheme";
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import React                                    from 'react';
import ToggleButton                             from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup                        from '@material-ui/lab/ToggleButtonGroup';

const GraphPaper: React.FC = (props) => {

    const { state, dispatch } = useContext(DeveloperContext);

    const handleThemeButtonClicked = (event: React.MouseEvent<HTMLElement>, theme: EnumGraphTheme) => {
        dispatch(new CommandSetGraphTheme(theme));
    }

    return (
        <Box width={1}>
            <Box display="flex" justifyContent="flex-end" pr={2}>
                <ToggleButtonGroup
                    exclusive
                    value={state.graphTheme}
                    onChange={handleThemeButtonClicked}
                    color="primary"
                    size="small">
                    <ToggleButton value={EnumGraphTheme.White}>White</ToggleButton>
                    <ToggleButton value={EnumGraphTheme.Blue}>Blue</ToggleButton>
                    <ToggleButton value={EnumGraphTheme.Grey}>Grey</ToggleButton>
                    <ToggleButton value={EnumGraphTheme.Black}>Black</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box display="flex" >
                <div className={`graph-paper ${state.graphTheme}`}>
                    {props.children}
                </div>
            </Box>
        </Box>
    )
}

export default GraphPaper;