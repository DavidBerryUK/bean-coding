import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({
    root: {
        display:'inline-block',        
        width:250,
        height:50,
        position:'relative'
    },
    iconContainer : {
        display: 'flex',
        position:'absolute',
        alignItems: 'center',
        justifyContent:'center',
        top:2,
        left:0,
        right:0,
        bottom:40,
    },
    title : {
        position:'absolute',
        textAlign:'center',
        left:0,
        right:0,
        bottom:0        
    }
})
);