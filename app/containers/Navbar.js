'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Navbar extends Component{
  render(){

    return (
      <StyleRoot style={styles.main}>

        <div style={styles.navbar}>

          <div style={styles.logo}>
          </div>

          <div style={styles.nav}>
            <a href='#' style={styles.hover} key='1'><li>{`About`}</li></a>
            <a href='#' style={styles.hover} key='2'><li>{`Skills`}</li></a>
            <a href='#' style={styles.hover} key='3'><li>{`Portfolio`}</li></a>
            <a href='#' style={styles.hover} key='4'><li>{`Contact`}</li></a>
          </div>

          <div style={styles.nav}>
            <a href='#' style={styles.connect} key='5'><li>{`Let's Connect!`}</li></a>
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
  navbar: {
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
    listStyle: 'none',
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    lineHeight: 2,
    textAlign: 'right',
    marginRight: 20,
    '@media (max-width: 775px)': {
            display: 'none',
    },
  },
  hover: {
    textDecoration: 'none',
    color: '#acacac',
    ':hover': {
     color: '#333',
    },
  },
  connect: {
    textDecoration: 'none',
    color: '#ac1a5d',
    fontWeight: 'bolder',
    ':hover': {
     color: '#ff0078',
    },
  }
}
