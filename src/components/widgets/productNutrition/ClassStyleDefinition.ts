import { makeStyles }                       from '@material-ui/core/styles';

export const ClassStyleDefinition = makeStyles(theme => ({
  textLabel: {
    fontSize: '12px',
    color: '#222',
    borderBottom: 'dotted 1px #aaa'

  },
  textData: {
    fontSize: '18px',
    color: '#777',
    marginBottom: 10
  }
})
);