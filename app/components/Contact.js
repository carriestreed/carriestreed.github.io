'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Contact extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div>
            {'CONTACT'}
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
    color: 'black',
  },
}
