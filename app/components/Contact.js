'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class Contact extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div>
          <p>
          {`Lorem ipsum dolor sit amet, vel vestibulum tempus enim iure sapien elementum, ipsum ipsum vel vehicula accumsan, morbi vestibulum fermentum. Morbi libero elit, viverra felis nam congue nisl lacus at. Wisi neque nullam ullamcorper wisi laoreet aliquet, justo sed, duis orci lacus suscipit amet. Elit viverra mauris arcu vestibulum auctor, a eu pellentesque parturient tellus ipsam. Fusce quis sollicitudin nulla nullam, odio erat urna fusce libero, phasellus orci sollicitudin, cras mattis pede eget. Molestie vel, laoreet sodales nullam parturient ut blandit, a porttitor duis, id id quam commodo tellus massa sollicitudin.
          sem augue nullam sem nunc, pharetra cras donec convallis praesent sed. Metus lacus commodo, eros pretium scelerisque fermentum malesuada mattis risus, nam sed leo amet, ullamcorper senectus, nunc eu in quisque nulla. Rhoncus fusce rhoncus in dui velit, aliquam leo elit wisi etiam phasellus ultricies, imperdiet ultrices duis iaculis nec venenatis, accumsan eget nunc vel. Quis rhoncus eros fermentum interdum, a cursus massa ut, maecenas in mollis aenean aliquet quam aliquam, et nec est, commodo turpis in. Non vitae ullamcorper, tempor ut a eget mi a feugiat. Quis placerat, aenean aenean hendrerit in at. Integer gravida bibendum velit lectus. Ullamcorper massa vel parturient sagittis duis, duis voluptatibus lacus ac sed, dictum vitae, mauris vestibulum morbi diam, libero sociosqu sapien odio est. At potenti euismod et urna risus, facilisis eget, cras sit ac vivamus volutpat imperdiet mattis.
          feugiat ac, ac cursus, donec eu nam a aliquam lorem facilisis, facilisis fermentum sed vivamus mauris non duis. Et porttitor mollis. Integer auctor felis semper montes, magna metus vitae, elit sem a fermentum malesuada tortor morbi, ac habitasse consectetuer cras pellentesque diam. Nam pede sagittis vehicula. Facilisis cras adipiscing, ante imperdiet aenean urna vitae, purus quis, sed urna at phasellus.`}
          </p>
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    height: '400px',
    backgroundColor: 'magenta',
    color: 'black',
  },
}
