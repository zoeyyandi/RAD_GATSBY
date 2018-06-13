import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const RadText = styled.h2`
  font-family: rad-web;
  font-size: calc(34pt + (170 - 34) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 1%;
  @media (max-width: 480px) {
    display: none;
  }
  letter-spacing: 1.8vw;
`;

const RadTextForMobile = styled.h2`
  font-family: rad-web;
  font-size: 80pt
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 1%;
  @media (min-width: 481px) {
    display: none;
  }
  letter-spacing: 1.5vw;
`;

const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  position: relative;
`;

class Type extends Component {
  text = 'rrrrrrrad';
  textForMobile = 'rrrad';
  timeouts = [];
  state = {
    typing: true
  };

  done = () => {
    this.timeouts.push(
      setTimeout(() => {
        this.setState({ typing: false }, () => {
          this.timeouts.push(
            setTimeout(() => {
              this.setState({ typing: true });
            }, 200)
          );
        });
      }, 1000)
    );
  };

  componentWillUnmount() {
    this.timeouts.forEach(window.clearTimeout);
  }

  render() {
    const { typing } = this.state;
    return (
      <Wrapper>
        {typing &&
          this.props.width > 480 && (
            <Typist cursor={{ show: false }} avgTypingDelay={200} onTypingDone={this.done}>
              <RadText>{this.text}</RadText>
            </Typist>
          )}
        <RadTextForMobile>{this.textForMobile}</RadTextForMobile>
      </Wrapper>
    );
  }
}

export default Type;
