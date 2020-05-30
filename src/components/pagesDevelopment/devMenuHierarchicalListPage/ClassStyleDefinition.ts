import { makeStyles }                           from '@material-ui/core/styles';
import { grey }                                 from '@material-ui/core/colors';

export const ClassStyleDefinition = makeStyles(theme => ({

    menuContainer: {
        transition:'all 1.0s, width 0.5s',    
        width:"100%",    
        height:400,
        border:'5px dashed red'
      },
      solidBackground : {
        backgroundColor:'#fff',
        borderColor:grey[300],
        borderRadius:4
      },
      constrainMenu: {
        width:340,    
      }
})
);