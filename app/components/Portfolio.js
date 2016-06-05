'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Portfolio extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div>
            {'PORTFOLIO'}
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    height: '400px',
    backgroundColor: '#ebebeb',
    color: 'black',
  },
}
