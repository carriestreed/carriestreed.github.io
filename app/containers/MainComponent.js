'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

@Radium
export default class MainComponent extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <About />
        <Skills />
        <Portfolio />
        <Contact />

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
}
