import React from 'react';
import { CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customLoader: {
    color: '#F50057',
    animation: '$spin 1s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '50%': {
      transform: 'rotate(180deg)',
      borderRadius: '50%',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CircularProgress className={classes.customLoader} size={40} thickness={3} />
    </div>
  );
};

export default Loading;
