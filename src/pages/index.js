import React, { Component } from 'react';
import styled from 'styled-components';
import VideoSection from '../components/videoSection';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Contact from '../components/contact';
import SideNav from '../components/sideNav';

import WomensMecca_1 from '../components/asset/images/1_WOMENS_MECCA/WomensMecca_1.jpg';
import WomensMecca_2 from '../components/asset/images/1_WOMENS_MECCA/WomensMecca_2.jpg';
import WomensMecca_3 from '../components/asset/images/1_WOMENS_MECCA/WomensMecca_3.jpg';
import WomensMecca_4 from '../components/asset/images/1_WOMENS_MECCA/WomensMecca_4.jpg';
import WomensMecca_5 from '../components/asset/images/1_WOMENS_MECCA/WomensMecca_5.jpg';
import Dispatch_1 from '../components/asset/images/2_DISPATCH/Dispatch_1.jpg';
import Dispatch_2 from '../components/asset/images/2_DISPATCH/Dispatch_2.jpg';
import Dispatch_3 from '../components/asset/images/2_DISPATCH/Dispatch_3.jpg';
import Dispatch_4 from '../components/asset/images/2_DISPATCH/Dispatch_4.mp4';
import Dispatch_5 from '../components/asset/images/2_DISPATCH/Dispatch_5.jpg';
import KSTAR_1 from '../components/asset/images/3_KSTAR/KSTAR_1.jpg';
import KSTAR_2 from '../components/asset/images/3_KSTAR/KSTAR_2.jpg';
import KSTAR_3 from '../components/asset/images/3_KSTAR/KSTAR_3.jpg';
import KSTAR_4 from '../components/asset/images/3_KSTAR/KSTAR_4.jpg';
import KSTAR_5 from '../components/asset/images/3_KSTAR/KSTAR_5.jpg';

class IndexPage extends Component {
  state = {
    clicked: false
  };

  handleNavClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <VideoSection isClicked={this.state.clicked} />
        <About />
        <Portfolio
          imgs={[
            WomensMecca_1,
            WomensMecca_2,
            WomensMecca_3,
            WomensMecca_4,
            WomensMecca_5
          ]}
        />
        <Portfolio
          imgs={[Dispatch_1, Dispatch_2, Dispatch_3, Dispatch_4, Dispatch_5]}
          hasVideo={true}
        />
        <Portfolio imgs={[KSTAR_1, KSTAR_2, KSTAR_3, KSTAR_4, KSTAR_5]} />
        <Services />
        <Contact />
        <SideNav handleNavClick={this.handleNavClick} />
      </div>
    );
  }
}
export default IndexPage;
