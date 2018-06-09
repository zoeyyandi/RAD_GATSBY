import React from 'react';
import styled from 'styled-components';
import {
  VIDEO,
  ABOUT,
  ABOUTSLIDE,
  PORTFOLIO1,
  PORTFOLIO1SLIDE,
  PORTFOLIO2,
  PORTFOLIO2SLIDE,
  PORTFOLIO3,
  PORTFOLIO3SLIDE,
  SERVICES,
  SERVICESSLIDE,
  CONTACT,
  scrollTo
} from './utility';

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  list-style-type: none;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  font-family: Georgia;
  font-size: 13pt;
`;

const Logo = A.extend`
  font-family: WigrumBold;
  font-size: 24pt;
`;

const SideNav = ({ handleNavClick }) => {
  const handleClick = (e, value = 0) => {
    e.preventDefault();
    handleNavClick();
    scrollTo(value, handleNavClick);
  };
  return (
    <Wrapper class="rightSidebar">
      <List>
        <ListItem onClick={handleClick}>
          <Logo href="#">rad</Logo>
        </ListItem>
        <ListItem onClick={e => handleClick(e, ABOUT)}>
          <A href="#">About</A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, PORTFOLIO1)}>
          <A href="#">Portfolio</A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, SERVICES)}>
          <A href="#">Services</A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, CONTACT)}>
          <A href="#">Contact</A>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default SideNav;
