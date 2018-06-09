import React, { Component } from 'react';
import styled from 'styled-components';
import WigrumBold from './asset/fonts/wigrum-bold.otf';
import debounce from 'lodash.debounce';
import { scrollTo } from './utility';

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
  position: sticky;
  top: 0;
  margin-bottom: 100vh;
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
  // constructor(props) {
  //   super(props);
  //   this.handleScrollDebounced = debounce(this.handleScroll, 200);
  // }

  // handleScroll = e => {
  //   let distance = e.target.scrollTop;
  //   console.log('body', e.target.scrollHeight);
  //   console.log('innerheight', window.innerHeight);
  //   console.log('scrollheight', document.documentElement.scrollHeight);
  //   console.log('distance', distance);
  //   if (distance < window.innerHeight * 2) {
  //     scrollTo(document.body, window.innerHeight);
  //   }
  // };

  // componentDidMount() {
  //   document.body.addEventListener('scroll', this.handleScrollDebounced);
  // }

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
