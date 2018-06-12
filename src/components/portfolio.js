import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import VideoSlide from './videoSlide';

import './portfolio.css';

export const SceneWrapper = styled.div`
  backgroundcolor: #fff;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ url }) => 'url(' + url.h + ')'};
  @media (max-width: 450px) {
    background-image: ${({ url }) => 'url(' + url.v + ')'};
  }
`;

const Portfolio = ({ imgs, hasVideo, className }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dotsClass: `slick-dots ${className}`,
    useTransform: false,
    useCSS: false
  };

  return (
    <SceneWrapper>
      <Slider {...settings}>
        {imgs.map(
          (img, key) =>
            hasVideo && key === 3 ? (
              <VideoSlide key={key} source={img} />
            ) : (
              <Slide key={key} url={img} />
            )
        )}
      </Slider>
    </SceneWrapper>
  );
};

export default Portfolio;
