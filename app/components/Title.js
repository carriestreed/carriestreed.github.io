'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Title extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div style={styles.name}>
            <div style={styles.carrie}>{`CARRIE`}</div>
            <div style={styles.streed}>{`STREED`}</div>
        </div>
        <div style={styles.title}>
          <p>{`web developer`}</p>
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    height: '400px',
    backgroundColor: 'hotpink',
    backgroundImage: 'url(../dist/images/bgnoise1.jpg)',
    backgroundSize: 'cover',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Fjalla One',
  },
  name: {
    fontSize: '80px',
    marginBottom: '10px',
    lineHeight: '80px',
    letterSpacing: '-3px',
    textShadow: '0 0 10px #fff',
    '@media (min-width: 425px)': {
            display: 'flex'
    },
  },
  carrie: {
    color: '#ac1a5d',
  },
  streed: {
    color: 'rgba(0,0,0,.8)',
  },
  title: {
    color: '#fff',
    textShadow: '0 0 3px #000',
    fontSize: '25px',
    marginTop: '-35px',
  }
}
