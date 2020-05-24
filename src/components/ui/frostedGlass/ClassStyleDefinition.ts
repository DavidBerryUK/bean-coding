import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

    root: {
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, .15)',
        backdropFilter: 'blur(8px) ',
        boxShadow: '0 1px 1px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05);'
    },
})
);