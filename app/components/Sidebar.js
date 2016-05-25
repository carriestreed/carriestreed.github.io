'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Sidebar extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>


          <div style={styles.logo}>
            <h1>Hello</h1>
          </div>

          <div style={styles.nav}>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </div>

          <div style={styles.nav}>
            <li>send an email</li>
          </div>



      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    color: '#333',
    minWidth: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    backgroundColor: '#ccc',
  },
  nav: {
    color: '#acacac',
    listStyle: 'none',
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    lineHeight: 2,
    textAlign: 'right',
    marginRight: 10,
  }
}
