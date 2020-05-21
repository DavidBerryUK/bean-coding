import { makeStyles }                           from '@material-ui/core/styles';

const drawerWidth = 280;

export const ClassStyleDefinition = makeStyles(theme => ({

    contentDrawOpen: {            
        padding: theme.spacing(1),
        paddingTop:0,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
      },
      contentDrawClosed: {            
        padding: theme.spacing(1),
        paddingTop:0,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
}),
);