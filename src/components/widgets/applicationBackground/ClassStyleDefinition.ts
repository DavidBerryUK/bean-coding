import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
        position:'absolute',
        left:-20,
        right:-20,
        top:-20,
        bottom:-20,
        backgroundPosition: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',             
        pointerEvents:'none',
        zIndex:-20,
        
    },
})
);