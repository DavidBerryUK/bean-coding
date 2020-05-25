import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
        display: 'flex',
      flexWrap: 'wrap',
        justifyContent:'center'
    },

    button: {
        marginLeft:4,
        marginRight:4,
        marginBottom:8,
        backgroundColor:'#fff'
    }
})
);