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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: -100;
`;
const OverLay = styled.div`
  position: absolute;
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

class VideoSection extends Component {
  render() {
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
