'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Slider from 'react-slick';

@Radium
export default class Portfolio extends Component{
  render(){

    let settings = {
      dots: true,
      infinite: false,
      speed: 900,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      draggable: true,
      swipeToSlide: true,
      swipe: true,
      touchMove: true,
      centerMode: true,
      initialSlide: 2,
      focusOnSelect: true,
    }

    return (
      <StyleRoot style={styles.main}>

        <div style={styles.slideshow}>
            <Slider {...settings} >

            	<div style={styles.slide}>
                <img style={styles.images} src='../dist/images/portfolio/wander-ios.png' />
                <p>
                  WANDER for IOS
                </p>

              </div>

              <div style={styles.slide}>
                <img style={styles.images} src='../dist/images/portfolio/vybez.png' />
                <p>VYBEZ - A MUSIC APP</p>
              </div>

              <div style={styles.slide}>
                <img style={styles.images} src='../dist/images/portfolio/wander.png' />
                <p>WANDER - A TRAVEL APP</p>
              </div>

              <div style={styles.slide}>
                <img style={styles.images} src='../dist/images/portfolio/mazerace.png' />
                <p>THE MAZE RACE</p>
              </div>

            </Slider>
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
  },
  slideshow: {
    margin: '0 auto',
    padding: '17px',
    width: '80vw',
    maxHeight: '400px',
    '@media (min-width: 400px)': {
      width: '75vw',
    },
  },
  slide: {
    fontFamily: 'Fjalla One',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '330px',
    margin: '5px',
    color: '#333',
  },
  links: {
    color: '#ac1a5d',
    textDecoration: 'none',
  },
  images: {
    height: '90%',
  },
}
