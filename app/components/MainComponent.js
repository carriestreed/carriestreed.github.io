'use strict'

import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

@Radium
export default class MainComponent extends Component{
  render(){
    return (
      <StyleRoot style={styles.main}>

        <div>
          <h1>{`Lorem ipsum dolor sit amet, vel vestibulum tempus enim iure sapien elementum, ipsum ipsum vel vehicula accumsan, morbi vestibulum fermentum. Morbi libero elit, viverra felis nam congue nisl lacus at. Wisi neque nullam ullamcorper wisi laoreet aliquet, justo sed, duis orci lacus suscipit amet. Elit viverra mauris arcu vestibulum auctor, a eu pellentesque parturient tellus ipsam. Fusce quis sollicitudin nulla nullam, odio erat urna fusce libero, phasellus orci sollicitudin, cras mattis pede eget. Molestie vel, laoreet sodales nullam parturient ut blandit, a porttitor duis, id id quam commodo tellus massa sollicitudin.

Ullamcorper turpis ac donec, nunc mi ac. Cras litora, magna vitae quis, nec risus sed odio risus libero sed, vel lacinia ut blanditiis in vel ac, repudiandae conubia. Dapibus placerat suscipit sapien quis pellentesque vel, lacus turpis mauris. Nulla nunc ipsum magnis tellus nonummy morbi, aenean turpis neque nunc vestibulum non vestibulum, scelerisque adipiscing diam sed amet montes etiam. Euismod purus lectus ut. Enim volutpat ante etiam ut pede, justo wisi. Varius a quisque at tempore tristique integer, sapien ante, nullam tortor dui scelerisque. Nonummy at varius vel id vel nisl, sit duis nulla vitae vestibulum, porta vivamus feugiat aliquam velit, ut malesuada facilisi suspendisse, ante curabitur explicabo rutrum porta quisque.

Wisi ultrices, lectus semper vitae at, praesent vulputate, minus fusce wisi lorem felis nam augue, iaculis massa justo. Cras class, purus quisque molestie ligula vel ut. Lectus neque sed turpis donec, sem augue nullam sem nunc, pharetra cras donec convallis praesent sed. Metus lacus commodo, eros pretium scelerisque fermentum malesuada mattis risus, nam sed leo amet, ullamcorper senectus, nunc eu in quisque nulla. Rhoncus fusce rhoncus in dui velit, aliquam leo elit wisi etiam phasellus ultricies, imperdiet ultrices duis iaculis nec venenatis, accumsan eget nunc vel. Quis rhoncus eros fermentum interdum, a cursus massa ut, maecenas in mollis aenean aliquet quam aliquam, et nec est, commodo turpis in. Non vitae ullamcorper, tempor ut a eget mi a feugiat. Quis placerat, aenean aenean hendrerit in at. Integer gravida bibendum velit lectus. Ullamcorper massa vel parturient sagittis duis, duis voluptatibus lacus ac sed, dictum vitae, mauris vestibulum morbi diam, libero sociosqu sapien odio est. At potenti euismod et urna risus, facilisis eget, cras sit ac vivamus volutpat imperdiet mattis.

Taciti in sem in litora feugiat ac, ac cursus, donec eu nam a aliquam lorem facilisis, facilisis fermentum sed vivamus mauris non duis. Et porttitor mollis. Integer auctor felis semper montes, magna metus vitae, elit sem a fermentum malesuada tortor morbi, ac habitasse consectetuer cras pellentesque diam. Nam pede sagittis vehicula. Facilisis cras adipiscing, ante imperdiet aenean urna vitae, purus quis, sed urna at phasellus.`}</h1>
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  main: {
    width: '100%',
    backgroundColor: 'blue',
    color: 'black',
    '@media (max-width: 775px)': {
        color: 'white',
        backgroundColor: 'pink',
      }
  },
  flex: {
    flexDirection: 'column',
  },
}
