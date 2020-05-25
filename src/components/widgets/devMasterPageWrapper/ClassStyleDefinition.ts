import { makeStyles } from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({

  experimentBox: {
    border: 'solid 2px red',
    color: 'red',
    borderRadius: 6,
    padding: 4,
  },

  experimentIcon: {
    padding: 0,
    color: 'red',
    fontSize: 50
  },

})
);