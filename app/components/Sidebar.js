'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Sidebar extends Component{
  render(){

    return (
      <StyleRoot style={styles.main}>

        <div style={styles.sidebar}>

          <div style={styles.logo}>
          </div>

          <div style={styles.nav}>
            <li key='1' style={styles.hover}>About</li>
            <li key='2' style={styles.hover}>Skills</li>
            <li key='3' style={styles.hover}>Portfolio</li>
            <li key='4' style={styles.hover}>Contact</li>
          </div>

          <div style={styles.nav}>
            <li key='5' style={styles.connect}>{`Let's Connect!`}</li>
          </div>

        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    minWidth: '140px',
    '@media (max-width: 775px)': {
            minHeight: '80px',
    },
  },
  sidebar: {
    width: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    '@media (max-width: 775px)': {
            backgroundColor: '#fff',
            flexDirection: 'row',
            width: '100%',
            display: 'fixed',
            bottom: 'auto',
            height: '80px',
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
    margin: '30px 0 0 0',
    '@media (max-width: 775px)': {
            margin: '10px',
            width: '100px',
            height: '62px',
    },
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
