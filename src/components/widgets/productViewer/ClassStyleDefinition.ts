import { makeStyles }                           from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,      
    },
    backgroundImage: {
      position:'relative',
      height:'100%',
      width:'100%',
      objectFit:'cover',
      objectPosition:'50% 50%', 
      borderRadius:2,
      filter:'contrast(.7) brightness(.7)',
      overflow:'hidden'
    }
})
);