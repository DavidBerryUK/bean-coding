import { blue }                                 from '@material-ui/core/colors';
import { grey }                                 from '@material-ui/core/colors';
import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    paper: {
        display:'inline-flex'
    },
    button: {
        marginLeft:0,
        marginRight:0,
        boxShadow:'none',
        backgroundColor:grey[100]
    },
    selected: {
        backgroundColor:blue[400],
        "&:hover":{
            backgroundColor:blue[600]
        }
    },
    first: {
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
    },
    middle: {
        borderRadius:0
    },
    last: {
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    }
})
);