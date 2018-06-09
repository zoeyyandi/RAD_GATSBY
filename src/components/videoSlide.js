import React, { Component } from 'react'
import styled from 'styled-components'
import poster from './asset/poster.png'
import './videoSlide.css'
const Wrapper = styled.div`
  cursor: pointer;
  height: 100vh;
  width: 100%;
  position: relative;
`
const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class VideoSlide extends Component {
  state = {
    isPlaying: false,
    isShowing: true,
  }

  handlePlayClick = () => {
    this.setState({ isPlaying: true }, () => this.video.play())
  }
  handlePauseClick = () => {
    this.setState({ isPlaying: false }, () => this.video.pause())
  }
  handleMouseMove = () => {
    this.setState({ isShowing: true }, () =>
      setTimeout(() => {
        this.setState({ isShowing: false })
      }, 3000)
    )
  }
  render() {
    return (
      <Wrapper onMouseMove={this.handleMouseMove}>
        <video
          className="video"
          ref={video => (this.video = video)}
          poster={poster}
          onPlay={this.handlePlayClick}
          onPause={this.handlePauseClick}
        >
          <source src={this.props.source} type="video/mp4" />
        </video>
        {this.state.isShowing && (
          <PlayBtn className="playBtn">
            {this.state.isPlaying ? (
              <i
                id="pause"
                className="fas fa-pause fa-5x"
                onClick={this.handlePauseClick}
              />
            ) : (
              <i
                id="play"
                className="fas fa-play fa-5x"
                onClick={this.handlePlayClick}
              />
            )}
          </PlayBtn>
        )}
      </Wrapper>
    )
  }
}
