import React from 'react';
import styled from 'styled-components';
import { ABOUT, PORTFOLIO1, SERVICES, CONTACT, scrollTo } from './utility';

const blackSections = ['about', 'portfolio3', 'portfolio4', 'services'];

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
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  list-style-type: none;
  margin: 0;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ navColor }) => navColor};
  font-family: Georgia;
  font-size: 13pt;
  &:active,
  &:focus {
    text-decoration: underline;
  }
`;

const Logo = A.extend`
  font-family: WigrumBold;
  font-size: 24pt;
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const SideNav = ({ section, handleNavClick }) => {
  const navColor = blackSections.includes(section) ? 'black' : 'white';
  const handleClick = (e, value = 0) => {
    const section = e.target.id;
    e.preventDefault();
    handleNavClick(section);
    scrollTo(value, handleNavClick);
  };
  return (
    <Wrapper class="rightSidebar">
      <List>
        <ListItem onClick={handleClick}>
          <Logo navColor={navColor} id="rad" href="#">
            rad
          </Logo>
        </ListItem>
        <ListItem onClick={e => handleClick(e, ABOUT)}>
          <A navColor={navColor} id="about" href="#">
            About
          </A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, PORTFOLIO1)}>
          <A navColor={navColor} id="portfolio" href="#">
            Portfolio
          </A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, SERVICES)}>
          <A navColor={navColor} id="services" href="#">
            Services
          </A>
        </ListItem>
        <ListItem onClick={e => handleClick(e, CONTACT)}>
          <A navColor={navColor} id="contact" href="#">
            Contact
          </A>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default SideNav;
