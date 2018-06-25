import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f7f8f9;
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
  font-size: calc(42pt + (60 - 42) * ((100vw - 420px) / (1024 - 420)));
  color: #292827;
  margin: 0;
  letter-spacing: -0.3vw;
`;

const ServiceList = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin-left: 2vw;
  }
  @media (min-width: 421px) {
    margin-left: 3.1vw;
  }
  @media (min-width: 980px) {
    margin-left: 1.6vw;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    padding-left: 4.5vw;
  }
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const Ul1 = Ul.extend`
  @media (min-width: 768px) {
    width: 28vw;
  }
  @media (min-width: 1000px) {
    width: 22vw;
  }
`;

const Li = styled.li`
  margin: 0;
  font-size: calc(12pt + (14 - 12) * ((100vw - 420px) / (1024 - 420)));
  width: 100%;
`;

const Paragraph = styled.p`
  font-size: calc(12pt + (14 - 12) * ((100vw - 420px) / (1024 - 420)));
  margin: 0;
  padding: 0.5vh 0 2vh 0;
`;

const Frame = styled.div`
  width: 45vw
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }
  @media (max-width: 520px) {
    width: 78vw;
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

const Services = () => (
  <Wrapper>
    <Inner>
      <H2Frame>
        <H2> brand services </H2>
      </H2Frame>
      <Frame>
        <Paragraph>
          Everything in a brand&#8217;s ecosystem matters. Whether it&#8217;s an
          email signature or an ad campaign. From positioning to typography and
          on through cinematography. It all has to be wicked.
        </Paragraph>
      </Frame>
      <ServiceList>
        <Ul1>
          <Li>Identity</Li>
          <Li>Logo &amp; Design</Li>
          <Li>Brand Naming</Li>
          <Li>Brand Strategy</Li>
        </Ul1>
        <Ul>
          <Li>Art Direction</Li>
          <Li>Voice, Copy &amp; Communications</Li>
          <Li>Film &amp; Photo</Li>
          <Li>Campaign &amp; Marketing Approach</Li>
        </Ul>
      </ServiceList>
    </Inner>
  </Wrapper>
);

export default Services;
