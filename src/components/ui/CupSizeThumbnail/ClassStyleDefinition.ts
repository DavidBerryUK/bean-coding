import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({
    root: {
        display:'inline-block',        
        width:90,
        height:150,
        position:'relative'

    },
    iconContainer : {
        display: 'flex',
        position:'absolute',
        alignItems: 'center',
        justifyContent:'center',
        top:4,
        left:0,
        right:0,
        bottom:30,
    },
    title : {
        position:'absolute',
        textAlign:'center',
        left:0,
        right:0,
        bottom:20
        
    },
    volume: {
        position:'absolute',
        textAlign:'center',
        left:0,
        right:0,
        bottom:4
    }
})
);