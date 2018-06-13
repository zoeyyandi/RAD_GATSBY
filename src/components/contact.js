import React from 'react';
import styled from 'styled-components';
import Type from './radType';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #292827;
  color: white;
  font-family: Georgia;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 6.4vh;
  @media (max-width: 420px) {
    padding: 2.8vh;
  }
`;

const A = styled.a`
  text-decoration: none;
  border-bottom: solid 1px white;
  color: white;
`;

const H2 = styled.h2`
  font-family: Georgia;
  font-size: calc(22pt + (42 - 22) * ((100vw - 420px) / (1024 - 420)));
  margin-bottom: 2vh;
`;

const H3 = styled.h3`
  font-family: Georgia;
  font-size: calc(12pt + (16 - 12) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  padding: 0.5vh 0;
`;

const Paragraph = styled.p`
  font-size: calc(12pt + (15 - 12) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  padding: 2vh 0;
`;

const LineBreak = styled.br`
  display: none;
  @media (max-width: 420px) {
    display: block;
  }
`;

const Upper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

const Contact = ({ screenWidth }) => (
  <Wrapper>
    <Upper>
      <H2> Give us a shout </H2>
      <H3>
        We'll hear you out, catch your drift &amp; <LineBreak /> introduce our way of thinking.
      </H3>
      <H3> We love meeting new colleagues.</H3>
      <Paragraph>
        <A href="mailto:hey@rrrad.ca?Subject=Hello%20">hey@rrrad.ca</A>
      </Paragraph>
    </Upper>
    <Type width={screenWidth} />
  </Wrapper>
);

export default Contact;
