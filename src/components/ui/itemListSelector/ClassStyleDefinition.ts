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
        backgroundColor:blue[400]
    },
    first: {
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
    },
    middle: {
        borderRadius:0
    },
    last: {
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    }
})
);