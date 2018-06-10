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
  background-color: white;
  font-family: Georgia;
`;

const H2 = styled.h2`
  font-family: WigrumBold;
  font-size: calc(34pt + (60 - 34) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
`;

const H3 = styled.h3`
  font-family: Georgia;
  font-size: calc(14pt + (21 - 14) * ((100vw - 420px) / (1024 - 420)));
  padding: 0.5vh 0;
  margin: 0;
  font-weight: normal;
`;

const Paragraph = styled.p`
  font-size: calc(12pt + (13 - 12) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  padding: 0.1vh 0;
`;

const LineBreak = styled.br`
  display: none;
  @media (max-width: 420px) {
    display: block;
  }
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <H2>
          business <LineBreak /> artistry
        </H2>
        <H3>Great companies have purpose and flair.</H3>
        <H3 style={{ paddingBottom: '0' }}>
          They're awake, self-aware and relevant.
        </H3>
        <Paragraph style={{ marginTop: '1vh' }}>
          We love organizations like that.
        </Paragraph>
        <Paragraph>We help their brands develop a big perspective.</Paragraph>
        <Paragraph>
          With insight from art, culture, technology and the marketplace.
        </Paragraph>
      </Wrapper>
    );
  }
}

export default About;

//min 1024
//min 768 - max 1024
//min 420 - max 768
//max 420

// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
