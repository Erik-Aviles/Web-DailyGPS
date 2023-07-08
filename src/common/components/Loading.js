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
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
