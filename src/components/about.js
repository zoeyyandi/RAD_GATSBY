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
  background-color: #f7f8f9;
  font-family: Georgia;
`;

const H2 = styled.h2`
  font-family: WigrumBold;
  font-size: calc(42pt + (60 - 42) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
`;

const H3 = styled.h3`
  font-family: Georgia;
  font-size: calc(14pt + (21 - 14) * ((100vw - 420px) / (1024 - 420)));
  padding: 0.5vh 0 1.5vh 0;
  margin: 0;
  font-weight: normal;
`;

const Paragraph = styled.p`
  font-size: calc(12pt + (13 - 12) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  padding: 0.1vh 0;
`;

const Frame = styled.div`
  width: 43vw
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 58vw;
  }
  @media (max-width: 768px) {
    width: 68vw;
  }
  @media (max-width: 520px) {
    width: 76vw;
  }
`;

const H2Frame = styled.div`
  width: 90vw;
  padding-right: 5vw;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 500px) {
    width: 50vw;
  }
`;

const H3Frame = styled.div`
  width: 95vw
  padding-right: 5vw;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 500px) {
    width: 70vw;
  }
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <H2Frame>
          <H2>business artistry</H2>
        </H2Frame>
        <H3Frame>
          <H3>We have a holistic view of brands &amp; marketing.</H3>
        </H3Frame>
        <Frame>
          <Paragraph>
            Cultural relevance meets acumen. Gorgeous and smart. Timeless yet
            innovative. We find the overlap. It has to be practical <i>and</i>{' '}
            breakthrough. Because we're here to change minds.
          </Paragraph>
        </Frame>
      </Wrapper>
    );
  }
}

export default About;
