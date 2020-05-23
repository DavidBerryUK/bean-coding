import { AppBar }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { IconButton }                           from '@material-ui/core';
import { Toolbar }                              from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import MenuIcon                                 from '@material-ui/icons/Menu';
import React                                    from 'react';

interface IProperties {
    onMenuTogglePressed: () => void;
}

const ApplicationHeader: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const handleDrawerToggle = () => {
        props.onMenuTogglePressed();
    };

    return (
        <AppBar position="fixed" className={classStyles.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classStyles.menuButton}
                    color="inherit"
                    onClick={handleDrawerToggle}
                    aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classStyles.title}>Starbucks Till ReactJS</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationHeader
