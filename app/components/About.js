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
          digital <span style={styles.darkPink}> marketing</span>, I am
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
    height: '300px',
    backgroundColor: 'hotPink',
    backgroundImage: 'url(../dist/images/about-sm.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '@media (min-width: 400px)': {
            height: '250px',
            backgroundImage: 'url(../dist/images/about.jpg)',
    },
    '@media (min-width: 768px)': {
            height: '410px',
    },
  },
  aboutMe: {
    width: '60%',
    padding: '0px 0px 0px 10px',
    fontSize: '18px',
    fontFamily: 'Fjalla One',
    color: '#303030',
    textShadow: '0 0 1px #fff',
    '@media (min-width: 600px)': {
            width: '50%',
            padding: '10px 10px 10px 50px',
            fontSize: '24px',
    },
    '@media (min-width: 768px)': {
            paddingLeft: '90px',
            fontSize: '30px',
    },
  },
  brightPink: {
    color: '#ff0078',
  },
  darkPink: {
    color: '#a4004d',
  }
}
