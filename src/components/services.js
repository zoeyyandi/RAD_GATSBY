import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
  font-family: Georgia;
  font-size: 14pt;
  display: flex;
  justify-content: flex-start;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4vw;
`;

const H2 = styled.h2`
  font-family: WigrumBold;
  font-size: 75pt;
  color: #292827;
  margin: 0;
`;

const ServiceList = styled.div`
  display: flex;
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Li = styled.li`
  margin: 0;
  list-style-position: inside;
  width: 35%;
`;

const Services = () => (
  <Wrapper>
    <Inner>
      <H2> holistic services </H2>
      <p>
        We look at a brand's entire ecosystem - everywhere they communicate everything.
        <br /> Then we create concepts fine-tuned to unify, turn heads, change minds, and be practical.
      </p>
      <ServiceList>
        <Ul>
          <Li>Identity</Li>
          <Li>Art Direction</Li>
          <Li>Logo &amp; Design</Li>
          <Li>Voice, Copy &amp; Communications</Li>
          <Li>Brand Naming</Li>
          <Li>Film &amp; Photo</Li>
          <Li>Brand Strategy</Li>
          <Li>Campaign &amp; Marketing Approach</Li>
        </Ul>
      </ServiceList>
    </Inner>
  </Wrapper>
);

export default Services;
