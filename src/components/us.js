import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
`;

const Image = styled.img`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  object-fit: cover;
`;

class Us extends Component {
  render() {
    const { img } = this.props;
    return (
      <Wrapper>
        <picture>
          <source srcSet={img.v} media="(max-width: 420px)" />
          <Image src={img.h} alt={img.h} />
        </picture>
      </Wrapper>
    );
  }
}

export default Us;
