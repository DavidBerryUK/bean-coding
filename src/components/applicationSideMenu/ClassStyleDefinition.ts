import { makeStyles }                           from '@material-ui/core/styles';

const drawerWidth = 280;

export const ClassStyleDefinition = makeStyles(theme => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,                
    },
    drawerPaper: {
        width: drawerWidth,
        paddingTop:60
    },
})
);