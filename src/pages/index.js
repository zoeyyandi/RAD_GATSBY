import React, { Component } from 'react';
import VideoSection from '../components/videoSection';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Contact from '../components/contact';
import SideNav from '../components/sideNav';
import { womens, dispatches, terroirs, kstars, us } from '../components/asset/images/index';
import _ from 'lodash';

class IndexPage extends Component {
  state = {
    clicked: false,
    section: ''
  };

  handleNavClick = section => {
    if (section) {
      this.setState({ clicked: !this.state.clicked, section });
    } else {
      this.setState({ clicked: !this.state.clicked });
    }
  };

  scrollHandler = e => {
    let scrollTop = e.srcElement.documentElement.scrollTop;
  };

  scrollHandlerDebouced = _.debounce(this.scrollHandler, 200);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandlerDebouced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandlerDebouced);
  }

  render() {
    return (
      <div>
        <VideoSection isClicked={this.state.clicked} />
        <About />
        <Portfolio imgs={womens} />
        <Portfolio imgs={dispatches} hasVideo={true} />
        <Portfolio imgs={terroirs} />
        <Portfolio imgs={kstars} />
        <Services />
        <Portfolio imgs={us} />
        <Contact />
        <SideNav section={this.state.section} handleNavClick={this.handleNavClick} />
      </div>
    );
  }
}
export default IndexPage;
