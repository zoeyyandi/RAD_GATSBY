import React, { Component } from 'react';
import styled from 'styled-components';
import videoUrl from './asset/video.mp4';
import videoBgImg from './asset/poster1.png';
import overlayImg from './asset/RADLOGO.svg';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
const Video = styled.video`
  position: fixed;
  left: 0;
  top: 0;
  width: auto;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  z-index: -100;
`;

const Img = styled.img`
  position: absolute;
  width: 35%;
  z-index: -99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

class VideoSection extends Component {
  render() {
    return (
      <Wrapper>
        <Video poster={videoBgImg} autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </Video>
        <Img src={overlayImg} />
      </Wrapper>
    );
  }
}

export default VideoSection;
