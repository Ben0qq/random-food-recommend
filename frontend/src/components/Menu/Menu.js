import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appbar: {
    backgroundColor: 'black',
    position: 'relative'
  },
  menuButton: {
    color: 'white'
  }
}));


function Menu() {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div className="Menu">
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={() => setDrawerState(true)} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={drawerState} onClose={() => setDrawerState(false)}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="O mnie" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/hobby">
                <ListItemText primary="Zainteresowania" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/career">
                <ListItemText primary="Kariera" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/achievements">
                <ListItemText primary="Osiągnięcia" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/links">
                <ListItemText primary="Linki" />
              </ListItem>
            </List>
          </Drawer>
          <Typography variant='h6'>
            Damian Bednarz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Menu;