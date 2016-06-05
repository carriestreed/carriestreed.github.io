'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Skills extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div style={styles.brackets}>
          <img src='../dist/images/icons/left-bracket.png' style={styles.bracket}/>
        </div>

        <div style={styles.icons}>
            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/react.png' style={styles.icon}/>
              <span style={styles.skill}>{`react`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/js.png' style={styles.icon}/>
              <span style={styles.skill}>{`javascript`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/html.png' style={styles.icon}/>
              <span style={styles.skill}>{`html`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/css.png' style={styles.icon}/>
              <span style={styles.skill}>{`css`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/mongodb.png' style={styles.icon}/>
              <span style={styles.skill}>{`mongodb`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/node.png' style={styles.icon}/>
              <span style={styles.skill}>{`node`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/bootstrap.png' style={styles.icon}/>
              <span style={styles.skill}>{`bootstrap`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/wordpress.png' style={styles.icon}/>
              <span style={styles.skill}>{`wordpress`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/photoshop.png' style={styles.icon}/>
              <span style={styles.skill}>{`photoshop`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/git.png' style={styles.icon}/>
              <span style={styles.skill}>{`git`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/ruby.png' style={styles.icon}/>
              <span style={styles.skill}>{`ruby`}</span>
            </div>

            <div style={styles.skillContainer}>
              <img src='../dist/images/icons/rails.png' style={styles.icon}/>
              <span style={styles.skill}>{`rails`}</span>
            </div>

        </div>

        <div style={styles.brackets}>
          <img src='../dist/images/icons/right-bracket.png' style={styles.bracket}/>
        </div>


      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '400px',
    backgroundColor: 'lightPink',
    backgroundImage: 'url(../dist/images/bgnoise2.jpg)',
    backgroundSize: 'cover',
  },
  brackets: {
    display: 'none',
    '@media (min-width: 500px)': {
      display: 'inline',
    },
  },
  bracket: {
    width: '50px',
  },
  icons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '300px',
    height: '350px',
    '@media (min-width: 400px)': {
            width: '350px',
            height: '350px',
    },
  },
  skillContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    margin: '0 10px',
    '@media (min-width: 400px)': {
            width: '60px',
            height: '60px',
    },
  },
  skill: {
    fontFamily: 'Open Sans Condensed',
    color: '#fff',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  },
}
