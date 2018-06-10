import React, { Component } from 'react';
import styled from 'styled-components';
import poster from './asset/poster.png';
import './videoSlide.css';
import Modal from './modal';

const Wrapper = styled.div`
  cursor: pointer;
  height: 100vh;
  width: 100%;
  position: relative;
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

  handlePause = () => this.setState({ isPlaying: false });

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        {!this.state.isPlaying && <Modal />}
        <video onPause={this.handlePause} className="video" ref={video => (this.video = video)} poster={poster}>
          <source src={this.props.source} type="video/mp4" />
        </video>
      </Wrapper>
    );
  }
}
