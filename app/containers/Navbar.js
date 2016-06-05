'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Navbar extends Component{
  render(){

    return (
      <StyleRoot style={styles.main}>

        <div style={styles.navbar}>

          <a href='#'>
            <div style={styles.logo}></div>
          </a>

          <div style={styles.nav}>
            <a href='#about' style={styles.hover} key='1'><li>{`About`}</li></a>
            <a href='#skills' style={styles.hover} key='2'><li>{`Skills`}</li></a>
            <a href='#portfolio' style={styles.hover} key='3'><li>{`Portfolio`}</li></a>
            <a href='#contact' style={styles.hover} key='4'><li>{`Contact`}</li></a>
          </div>

          <div style={styles.nav}>
            <a href='mailto:hello@carriestreed.com' style={styles.connect} key='5'><li>{`Get in Touch!`}</li></a>
          </div>

        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    minHeight: '80px',
    '@media (min-width: 768px)': {
            minWidth: '140px',
    },
  },
  navbar: {
    position: 'fixed',
    backgroundColor: '#fff',
    width: '100%',
    height: '80px',
    bottom: 'auto',
    '@media (min-width: 768px)': {
            width: '140px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            top: 0,
            bottom: 0,
            left: 0,
    },
  },
  logo: {
    alignSelf: 'center',
    backgroundImage: 'url(../dist/images/cs-logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '10px',
    width: '100px',
    height: '62px',
    cursor: 'crosshair',
    '@media (min-width: 768px)': {
            margin: '30px 10px 0px 10px',
            width: '110px',
            height: '70px',
    },
  },
  nav: {
    display: 'none',
    listStyle: 'none',
    fontFamily: 'Open Sans Condensed',
    fontSize: '14px',
    lineHeight: 2,
    textAlign: 'right',
    marginRight: '20px',
    '@media (min-width: 768px)': {
            display: 'block',
    },
  },
  hover: {
    textDecoration: 'none',
    color: '#acacac',
    ':hover': {
     color: '#333',
     cursor: 'crosshair',
    },
  },
  connect: {
    textDecoration: 'none',
    color: '#ac1a5d',
    fontWeight: 'bolder',
    ':hover': {
     color: '#ff0078',
     cursor: 'crosshair',
    },
  }
}
