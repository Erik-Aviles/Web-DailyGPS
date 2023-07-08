import React from 'react';
import { makeStyles } from '@mui/styles';
import { ReactComponent as LogoB } from '../resources/images/logoB.svg';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
    borderRadius: '7px 7px 0 0',
  },
}));

const LogoImage = () => {
  const classes = useStyles();
  return (
    <LogoB className={classes.image} alt="Logo dailyGPS colorPick" />
  );
};

export default LogoImage;
