'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class MainComponent extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div style={styles.flex}>
          <h1>{`I'm the main component`}</h1>
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    backgroundColor: 'blue',
    border: '2px solid yellow',
    color: 'white',
    '@media (max-width: 320px)': {
        color: 'pink'
      }
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
}
