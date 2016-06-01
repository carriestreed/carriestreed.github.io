'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class About extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div style={styles.aboutMe}>
          As a <span style={styles.brightPink}> web developer </span> with a talent
          for <span style={styles.darkPink}> design </span> and a background in
          digital <span style={styles.darkPink}> marketing </span>, I am
          <span style={styles.brightPink}> motivated </span>
          by the <span style={styles.darkPink}> challenge </span> of creating
          <span style={styles.darkPink}> beautiful </span> products that users
          <span style={styles.darkPink}> love </span> and depend on.
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '600px',
    backgroundColor: 'darkPink',
    backgroundImage: 'url(../dist/images/about.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'black',
    fontFamily: 'Fjalla One',
    fontSize: '30px',
    '@media (min-width: 768px)': {
            height: '600px',
    },
  },
  aboutMe: {
    border: '2px solid red',
    width: '398px',
    height: '220px',
    paddingRight: '220px',
    textShadow: '0 0 1px #fff',
    '@media (min-width: 768px)': {
            width: '398px',
            height: '220px',
            paddingRight: '220px',
    },
  },
  brightPink: {
    color: '#ff0078',
  },
  darkPink: {
    color: '#a4004d',
  }
}
