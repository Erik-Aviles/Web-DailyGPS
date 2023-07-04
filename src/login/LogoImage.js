import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Logo } from '../resources/images/logo.svg';
import { ReactComponent as LogoB } from '../resources/images/logoB.svg';

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: '1440px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '320px',
    },
  },
}));

const LogoImage = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    !useMediaQuery(theme.breakpoints.down('lg'))
      ? <LogoB className={classes.image} alt="Logo de la marca dailyGPS pick" />
      : <Logo className={classes.image} alt="Logo de la marca dailyGPS ligth" />
  );
};

export default LogoImage;
