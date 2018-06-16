import React, { Component } from 'react';
import styled from 'styled-components';
import videoMp4 from './asset/video.mp4';
import videoWebm from './asset/video.webm';
import overlayImg from './asset/RADLOGO.svg';
import './videoSection.css';
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #222223;
`;

const VideoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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
        <VideoWrapper>
          <video className="video" autoPlay muted loop playsInline>
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
          </video>
        </VideoWrapper>
        <OverLay>
          <Img src={overlayImg} />
        </OverLay>
      </Wrapper>
    );
  }
}

export default VideoSection;
