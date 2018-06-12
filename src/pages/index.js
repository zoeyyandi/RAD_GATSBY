import React, { Component } from 'react';
import VideoSection from '../components/videoSection';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Contact from '../components/contact';
import SideNav from '../components/sideNav';
import Us from '../components/us';
import {
  womens,
  dispatches,
  terroirs,
  kstars,
  us
} from '../components/asset/images/index';
import _ from 'lodash';

class IndexPage extends Component {
  state = {
    scrollTop: 0
  };
  scrollHandler = e => {
    this.getScrollTop();
  };

  scrollHandlerDebouced = _.debounce(this.scrollHandler, 200);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandlerDebouced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandlerDebouced);
  }

  getScrollTop = () => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    this.setState({ scrollTop });
  };

  render() {
    return (
      <div>
        <VideoSection />
        <About />
        <Portfolio className={'womens'} imgs={womens} />
        <Portfolio className={'dispatch'} imgs={dispatches} hasVideo={true} />
        <Portfolio className={'terroir'} imgs={terroirs} />
        <Portfolio className={'kstar'} imgs={kstars} />
        <Services />
        <Us img={us[0]} />
        <Us img={us[1]} />
        <Contact />
        <SideNav currentScrollTop={this.state.scrollTop} />
      </div>
    );
  }
}
export default IndexPage;
