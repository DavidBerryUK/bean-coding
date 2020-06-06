import { blue }                                 from '@material-ui/core/colors';
import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({
    
    label: {
        backgroundColor:blue[300],                
        color:blue[900],
        "&.small":{
            borderRadius:2,
            fontSize:8,            
            padding:2,
            margin:2,
        },
        "&.medium":{
            borderRadius:4,
            fontSize:14,
            padding:6,
            margin:2,
        },
        "&.large":{
            borderRadius:8,
            fontSize:26,
            padding:8,
            margin:4,            
        }
    }
})
);