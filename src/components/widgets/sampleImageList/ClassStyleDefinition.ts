import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent:'center'
    },

    button: {
        marginLeft:4,
        marginRight:4,
        backgroundColor:'#fff'
    }
})
);