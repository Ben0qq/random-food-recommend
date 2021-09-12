import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  Introduction: {
      display: 'flex',
      flexDirection: 'row',
  }
}));


function Menu() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container className={classes.Introduction}>
            <img height="400px" width="300px" src="https://i1.kwejk.pl/k/obrazki/2021/09/QZIXwtVPHtByklVJ.jpg"/>
            <h4>test</h4>
        </Container>
        <Container>
            <h4>Tak sie robi hip hop</h4>
        </Container>
    </React.Fragment>
  );
}

export default Menu;