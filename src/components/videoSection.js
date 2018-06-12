import React, { Component } from 'react';
import styled from 'styled-components';
// import videoMp4 from './asset/video.mp4';
import j from './asset/jacquemus.mp4';
import videoWebm from './asset/video.webm';
import overlayImg from './asset/RADLOGO.svg';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
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
`;
const Img = styled.img`
  width: 35%;
`;

class VideoSection extends Component {
  render() {
    return (
      <Wrapper>
        <video
          style={{
            position: 'absolute',
            top: -400,
            left: 0,
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%'
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={j} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
        <OverLay>
          <Img src={overlayImg} />
        </OverLay>
      </Wrapper>
    );
  }
}

export default VideoSection;
