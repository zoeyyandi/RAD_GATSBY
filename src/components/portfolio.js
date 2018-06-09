import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import VideoSlide from './videoSlide';

import './portfolio.css';

export const SceneWrapper = styled.div`
  backgroundcolor: #fff;
  position: sticky;
  top: 0;
  margin-bottom: 100vh;
`;

const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  object-fit: cover;
`;

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const convertAlt = img => img.split('/')[4].split('.')[0];

const Portfolio = ({ imgs: [img1, img2, img3, img4, img5], hasVideo }) => (
  <SceneWrapper>
    <Slider {...settings}>
      <Img src={img1} alt={convertAlt(img1)} />
      <Img src={img2} alt={convertAlt(img2)} />
      <Img src={img3} alt={convertAlt(img3)} />
      {hasVideo ? (
        <VideoSlide source={img4} />
      ) : (
        <Img src={img4} alt={convertAlt(img4)} />
      )}
      <Img src={img5} alt={convertAlt(img5)} />
    </Slider>
  </SceneWrapper>
);

export default Portfolio;
