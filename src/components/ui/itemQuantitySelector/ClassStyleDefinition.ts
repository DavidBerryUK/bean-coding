import { makeStyles }                           from '@material-ui/core/styles';
import { grey }                                 from '@material-ui/core/colors';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {        
        display:'flex',
        alignItems: 'center',        
    },
    quantity: {
        display:'inline-block',        
        fontSize:'30px',
        color:grey.A700
    },
})
);