import React, { Component } from 'react';
import styled from 'styled-components';
import videoUrl from './asset/video.mp4';
import videoBgImg from './asset/poster1.png';
import overlayImg from './asset/RADLOGO.svg';
import { scrollTo } from './utility';
import debounce from 'lodash.debounce';
import {
  VIDEO,
  ABOUT,
  ABOUTSLIDE,
  PORTFOLIO1,
  PORTFOLIO1SLIDE,
  PORTFOLIO2,
  PORTFOLIO2SLIDE,
  PORTFOLIO3,
  PORTFOLIO3SLIDE,
  SERVICES,
  SERVICESSLIDE,
  CONTACT
} from './utility';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin-bottom: 100vh;
`;
const Video = styled.video`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: -100;
`;
const OverLay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -99;
`;
const Img = styled.img`
  width: 35%;
`;

console.log(
  VIDEO,
  ABOUT,
  PORTFOLIO1,
  PORTFOLIO2,
  PORTFOLIO3,
  SERVICES,
  CONTACT
);

class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.handleScrollDebounced = debounce(this.handleScroll, 200);
    this.state = {
      lastScrollTop: 0
    };
  }
  // getBodyScrollTop = () => {
  //   return Math.max(
  //     window.pageYOffset,
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop
  //   );
  // };

  handleScroll = e => {
    if (!this.props.isClicked) {
      let distance = e.target.scrollingElement.scrollTop;
      console.log(distance, e);
      if (distance > VIDEO && distance < ABOUT) {
        distance > this.state.lastScrollTop ? scrollTo(ABOUT) : scrollTo(0);
      } else if (distance > ABOUTSLIDE && distance < PORTFOLIO1) {
        distance > this.state.lastScrollTop
          ? scrollTo(PORTFOLIO1)
          : scrollTo(ABOUT);
      } else if (distance > PORTFOLIO1SLIDE && distance < PORTFOLIO2) {
        distance > this.state.lastScrollTop
          ? scrollTo(PORTFOLIO2)
          : scrollTo(PORTFOLIO1);
      } else if (distance > PORTFOLIO2SLIDE && distance < PORTFOLIO3) {
        distance > this.state.lastScrollTop
          ? scrollTo(PORTFOLIO3)
          : scrollTo(PORTFOLIO2);
      } else if (distance > PORTFOLIO3SLIDE && distance < SERVICES) {
        distance > this.state.lastScrollTop
          ? scrollTo(SERVICES)
          : scrollTo(PORTFOLIO3);
      } else if (distance > SERVICESSLIDE && distance < CONTACT) {
        distance > this.state.lastScrollTop
          ? scrollTo(CONTACT)
          : scrollTo(SERVICES);
      } else {
        console.log('heheh');
      }
      this.setState({ lastScrollTop: distance });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDebounced);
  }

  render() {
    // console.log(this.state.lastScrollTop);
    return (
      <Wrapper>
        <Video poster={videoBgImg} autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </Video>
        <OverLay>
          <Img src={overlayImg} />
        </OverLay>
      </Wrapper>
    );
  }
}

export default VideoSection;
