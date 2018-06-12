import React, { Component } from 'react';
import styled from 'styled-components';
import './videoSlide.css';
import Modal from './modal';
import Poster from './asset/poster.jpg';

const Wrapper = styled.div`
  cursor: pointer;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 3;
`;

export default class VideoSlide extends Component {
  state = {
    isPlaying: false
  };

  handleClick = () => {
    this.setState(
      state => ({ isPlaying: !state.isPlaying }),
      () => {
        if (this.state.isPlaying) {
          this.video.play();
        } else {
          this.video.pause();
        }
      }
    );
  };

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        {!this.state.isPlaying && <Modal />}
        <video
          className="video"
          ref={video => (this.video = video)}
          poster={Poster}
        >
          <source src={this.props.source} type="video/mp4" />
        </video>
      </Wrapper>
    );
  }
}
