import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #292827;
  color: white;
  font-family: Georgia;
  font-size: 14pt;
`;

const A = styled.a`
  text-decoration: none;
  border-bottom: solid 1px white;
  color: white;
`;

const H2 = styled.h2`
  font-family: Georgia;
  font-size: 26pt;
`;

const H3 = styled.h3`
  font-family: Georgia;
  font-size: 16pt;
`;

const Contact = () => (
  <Wrapper>
    <H2> Give us a shout </H2>
    <H3>
      We'll hear you out, catch your drift &amp; introduce our way of thinking.
      <br /> We love meeting new colleagues.
    </H3>
    <p>
      <A href="mailto:hey@rrrad.ca?Subject=Hello%20">hey@rrrad.ca</A>
    </p>
  </Wrapper>
);

export default Contact;
