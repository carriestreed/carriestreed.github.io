'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Title from '../components/Title';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

@Radium
export default class MainComponent extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

          <a name='title'><Title /></a>
          <a name='about'><About /></a>
          <a name='skills'><Skills /></a>
          <a name='portfolio'><Portfolio /></a>
          <a name='contact'><Contact /></a>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    flex: '1',
  },
}
