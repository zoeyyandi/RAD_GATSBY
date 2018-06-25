import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fontawesome-all.css';
import './index.css';
import icon from '../components/asset/ico.png';

const Layout = ({ children, data }) => (
  <div style={{ height: '100%' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Work with Rad, an independent creative agency in Toronto, Canada. Business Artistry. Branding, identity, marketing, logo design, brand naming, campaign concept. Established in 2016 by Tom Smith and Richi Dao. '
        },
        {
          name: 'keywords',
          content:
            'brand, branding, creative, concept, toronto, canada, marketing, strategy, writing, design, copywriting, art direction, agency, new, campaign'
        },
        {
          property: 'og:title',
          content: 'Rad'
        },
        {
          property: 'og:description',
          content:
            'Work with Rad, an independent creative agency in Toronto, Canada. Business Artistry. Branding, identity, marketing, logo design, brand naming, campaign concept. Established in 2016 by Tom Smith and Richi Dao. '
        },
        {
          name: 'twitter:title',
          content: 'Rad'
        },
        {
          name: 'twitter:description',
          content:
            'Work with Rad, an independent creative agency in Toronto, Canada. Business Artistry. Branding, identity, marketing, logo design, brand naming, campaign concept. Established in 2016 by Tom Smith and Richi Dao. '
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon}` }]}
    />
    <div style={{ height: '100%' }}>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
