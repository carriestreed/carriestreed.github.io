'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router';

@Radium
export default class Contact extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div>
          <a href='mailto:hello@carriestreed.com' style={styles.email}>
            hello<span style={styles.pink}>@</span>carriestreed.com
          </a>
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    height: '400px',
    backgroundColor: 'paleVioletRed',
    backgroundImage: 'url(../dist/images/bgnoise3.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    color: '#fff',
    fontFamily: 'Fjalla One',
    fontSize: '30px',
    textDecoration: 'none',
    textShadow: '0 0 5px #000',
    '@media (min-width: 400px)': {
      fontSize: '40px',
    },
    '@media (min-width: 600px)': {
      fontSize: '60px',
    },
    '@media (min-width: 1050px)': {
      fontSize: '80px',
    },
  },
  pink: {
    color: '#ff0078',
  },
}
