import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
        width: 200,
        height: 80,                
        marginLeft:4,
        marginRight:4
    },
    media: {
        height: 54,
      },
      cardContent : {
        paddingTop:2
      }

})
);