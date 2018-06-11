import React, { Component } from 'react';
import styled from 'styled-components';

const RadText = styled.h2`
  font-family: WigrumBold;
  font-size: calc(34pt + (170 - 34) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  position: absolute;
  bottom: 0;
  left: -1%;
  @media (max-width: 420px) {
    display: none;
  }
`;

const RadTextForMobile = styled.h2`
  font-family: WigrumBold;
  font-size: 80pt
  margin: 0;
  position: absolute;
  bottom: 0;
  left: -1%;
  @media (min-width: 421px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  position: relative;
`;

class Type extends Component {
  text = 'rrrrrrrad';
  textForMobile = 'rrrad';
  state = {
    text: ''
  };

  componentDidMount() {
    const array = this.text.split('');
    this.typeWriter(array, 0);
  }

  typeWriter = (arr, i) => {
    if (i === arr.length) {
      setTimeout(() => {
        this.setState({ text: '' });
        this.typeWriter(arr, 0);
      }, 500);
    } else {
      this.setState({ text: this.state.text + arr[i] });
      setTimeout(() => {
        this.typeWriter(arr, i + 1);
      }, 150);
    }
  };

  render() {
    return (
      <Wrapper>
        <RadText>{this.state.text}</RadText>
        <RadTextForMobile>{this.textForMobile}</RadTextForMobile>
      </Wrapper>
    );
  }
}

export default Type;
