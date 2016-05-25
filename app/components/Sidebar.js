'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Sidebar extends Component{
  render(){

    return (
      <StyleRoot style={styles.main}>

          <div style={styles.logo} />

          <div style={styles.nav}>
            <li key='1' style={styles.hover}>About</li>
            <li key='2' style={styles.hover}>Skills</li>
            <li key='3' style={styles.hover}>Portfolio</li>
            <li key='4' style={styles.hover}>Contact</li>
          </div>

          <div style={styles.nav}>
            <li key='5' style={styles.connect}>{`let's connect!`}</li>
          </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    color: '#333',
    minWidth: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 775px)': {
            flexDirection: 'row',
            alignItems: 'center',
            width: 'auto',
    },
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    backgroundImage: 'url(../dist/images/cs-logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '110px',
    height: '70px',
    margin: '30px',
  },
  nav: {
    color: '#acacac',
    listStyle: 'none',
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    lineHeight: 2,
    textAlign: 'right',
    marginRight: 20,
    '@media (max-width: 775px)': {
            display: 'none',
    }
  },
  hover: {
    ':hover': {
     color: '#333',
     cursor: 'crosshair',
    },
  },
  connect: {
    color: '#ac1a5d',
    fontWeight: 'bolder',
    ':hover': {
     color: '#ff0078',
     cursor: 'crosshair',
    },
  }
}
