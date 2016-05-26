import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Sidebar from '../components/Sidebar';
import MainComponent from '../components/MainComponent';

@Radium
export default class App extends Component {
  render(){
    return (
      <StyleRoot style={styles.main}>
        <Sidebar />
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
