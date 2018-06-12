import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import VideoSlide from './videoSlide';

import './portfolio.css';

export const SceneWrapper = styled.div`
  backgroundcolor: #fff;
`;

const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  object-fit: cover;
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
              <div
                key={key}
                style={{
                  height: '100vh',
                  width: '100vw',
                  boxSizing: 'border-box'
                }}
              >
                <picture key={key}>
                  <source srcSet={img.v} media="(max-width: 420px)" />
                  <Img src={img.h} alt={img.h} />
                </picture>
              </div>
            )
        )}
      </Slider>
    </SceneWrapper>
  );
};

export default Portfolio;
