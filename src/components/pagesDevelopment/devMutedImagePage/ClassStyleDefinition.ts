import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    regionImage: {
        position: 'relative',
        width: 1200,
        height: 800,
    },
    sampleRegion1: {
        position: 'absolute',
        left: 100,
        top: 80,
        width: 400,
        height: 400,
    },
    sampleRegion2: {
        position: 'absolute',
        left: 300,
        bottom: 20,
        width: 550,
        height: 280,        
    },
    sampleRegion3: {
        position: 'absolute',
        right: 50,
        top: 20,
        width: 250,
        height: 600,        
    }

})
);