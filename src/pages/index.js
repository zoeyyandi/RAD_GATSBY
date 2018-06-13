import React, { Component } from 'react';
import VideoSection from '../components/videoSection';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Contact from '../components/contact';
import SideNav from '../components/sideNav';
import Us from '../components/us';
import { womens, dispatches, terroirs, kstars, us } from '../components/asset/images/index';
import _ from 'lodash';

class IndexPage extends Component {
  state = {
    scrollTop: 0,
    sectionHeight: window.innerHeight,
    screenWidth: window.innerWidth
  };
  scrollHandler = e => {
    this.getScrollTop();
  };

  scrollHandlerDebouced = _.debounce(this.scrollHandler, 200);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandlerDebouced);
    window.addEventListener('resize', this.scrollHandlerDebouced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandlerDebouced);
    window.removeEventListener('resize', this.scrollHandlerDebouced);
  }

  getScrollTop = () => {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    const sectionHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    this.setState({ scrollTop, sectionHeight, screenWidth });
  };

  render() {
    const { sectionHeight, scrollTop, screenWidth } = this.state;
    console.log(screenWidth, sectionHeight);

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
        <Contact screenWidth={screenWidth} />
        <SideNav currentScrollTop={scrollTop} sectionHeight={sectionHeight} />
      </div>
    );
  }
}
export default IndexPage;
