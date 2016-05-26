'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Navbar from './Navbar';
import MainComponent from './MainComponent';

@Radium
export default class App extends Component {
  render(){
    return (
      <StyleRoot style={styles.main}>
        <Navbar />
        <MainComponent />
      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (max-width: 775px)': {
            flexDirection: 'column',
    },
  }
}
