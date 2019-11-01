import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  userName:{
    width:'100%',
    fontSize:18,
    textAlign:'center',
    fontWeight:'700',
    marginBottom:'10%',
  },
  userInfo:{
    textAlign:'left',
    width:'100%',
    lineHeight:1,
  },
});

export default function UserInfo() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={require('../SLIKI/userAvatar.png')} className={classes.bigAvatar} />
      <div className="container">
        <h3 className={classes.userName}>ИМЕ И ПРЕЗИМЕ</h3>
        <p className={classes.userInfo}>Даум на раѓање: <span className={classes.userInfo}>14.03.1985</span></p>
        <p className={classes.userInfo}>Искуство: <span className={classes.userInfo}>5 години</span></p>
        <p className={classes.userInfo}>Категорија: <span className={classes.userInfo}>Професионалец</span></p>
      </div>
    </Grid>
  );
}
