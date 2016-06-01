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
        <MainComponent style={styles.flex} />
      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (min-width: 768px)': {
            flexDirection: 'row',
    },
  },
}
