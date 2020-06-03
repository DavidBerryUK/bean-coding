import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
    fontSize: 40
  },

  componentName: {
    backgroundColor:blue[300],
    borderRadius: 6,
    padding: 4,
    marginLeft:20
  }

})
);