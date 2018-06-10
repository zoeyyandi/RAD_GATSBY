import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4vw;
  background-color: #f3f3f3;
  font-family: Georgia;
  font-size: 14pt;
`;

const H2 = styled.h2`
  font-family: WigrumBold;
  font-size: 75pt;
  margin: 0;
`;

const H3 = styled.h3`
  font-family: Georgia;
  font-size: 24pt;
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <H2> business artistry </H2>
        <H3>
          Great companies have purpose and flair.
          <br /> They're awake, self-aware and relevant.
        </H3>
        <p>
          We love organizations like that.
          <br /> We help their brands develop a big perspective.
          <br /> With insight from art, culture, technology and the marketplace.
        </p>
      </Wrapper>
    );
  }
}

export default About;
