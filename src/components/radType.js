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
  letter-spacing: 0.55vw;
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
  letter-spacing: 0.65vw;
`;

const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  position: relative;
`;

class Type extends Component {
  text = 'rrrrrrrad';
  textForMobile = 'rrrad';
  state = { showTyping: this.props.showTyping };

  componentDidUpdate(props) {
    if (props.showTyping !== this.props.showTyping) {
      this.setState({ showTyping: this.props.showTyping });
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.showTyping && (
          <Typist cursor={{ show: false }} avgTypingDelay={200}>
            {this.props.width > 480 ? (
              <RadText>{this.text}</RadText>
            ) : (
              <RadTextForMobile>{this.textForMobile}</RadTextForMobile>
            )}
          </Typist>
        )}
      </Wrapper>
    );
  }
}

export default Type;
