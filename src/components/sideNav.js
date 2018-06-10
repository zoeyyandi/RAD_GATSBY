import React, { Component } from 'react';
import styled from 'styled-components';
import { scrollTo, getSection } from './utility';
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
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  color: ${({ navColor }) => navColor};
  font-family: Georgia;
  font-size: 13pt;
`;

const Logo = A.extend`
  font-family: WigrumBold;
  font-size: 24pt;
`;

class SideNav extends Component {
  portfolios = ['portfolio', 'portfolio2', 'portfolio3', 'portfolio4'];
  service = ['services', 'us'];
  state = {
    activeSection: 'rad',
    navColor: 'white'
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentScrollTop !== this.props.currentScrollTop) {
      const activeSection = getSection(this.props.currentScrollTop, this.ranges);
      this.setState({ activeSection, navColor: blackSections.includes(activeSection) ? 'black' : 'white' });
    }
  }

  componentDidMount() {
    this.getCurrentSectionHeight();
    const activeSection = getSection(this.props.currentScrollTop, this.ranges);
    this.setState({ activeSection, navColor: blackSections.includes(activeSection) ? 'black' : 'white' });
  }

  getCurrentSectionHeight = () => {
    this.sectionHeight = window.innerHeight;
    this.rad = 0;
    this.about = this.sectionHeight / 2;
    this.portfolio = this.about + this.sectionHeight;
    this.portfolio2 = this.portfolio + this.sectionHeight;
    this.portfolio3 = this.portfolio2 + this.sectionHeight;
    this.portfolio4 = this.portfolio3 + this.sectionHeight;
    this.services = this.portfolio4 + this.sectionHeight;
    this.us = this.services + this.sectionHeight;
    this.contact = this.us + this.sectionHeight;
    this.bottom = this.sectionHeight * 9;
    this.ranges = [
      { sectionName: 'rad', min: this.rad, max: this.about },
      { sectionName: 'about', min: this.about, max: this.portfolio },
      { sectionName: 'portfolio', min: this.portfolio, max: this.portfolio2 },
      { sectionName: 'portfolio2', min: this.portfolio2, max: this.portfolio3 },
      { sectionName: 'portfolio3', min: this.portfolio3, max: this.portfolio4 },
      { sectionName: 'portfolio4', min: this.portfolio4, max: this.services },
      { sectionName: 'services', min: this.services, max: this.us },
      { sectionName: 'us', min: this.us, max: this.contact },
      { sectionName: 'contact', min: this.contact, max: this.bottom }
    ];
    // handle click
    this.aboutClick = this.sectionHeight;
    this.portfolioClick = this.sectionHeight * 2;
    this.servicesClick = this.sectionHeight * 6;
    this.contactClick = this.sectionHeight * 8;
  };

  handleClick = e => {
    e.preventDefault();
    // get current section height
    this.getCurrentSectionHeight();
    const section = e.target.id;
    const value = this[section + 'Click'];
    scrollTo(value);
    this.setState({
      activeSection: section,
      navColor: blackSections.includes(section) ? 'black' : 'white'
    });
  };

  render() {
    return (
      <Wrapper class="rightSidebar">
        <List>
          <ListItem onClick={this.handleClick}>
            <Logo navColor={this.state.navColor} id="rad" href="#">
              rad
            </Logo>
          </ListItem>
          <ListItem onClick={e => this.handleClick(e)}>
            <A active={this.state.activeSection === 'about'} navColor={this.state.navColor} id="about" href="#">
              About
            </A>
          </ListItem>
          <ListItem onClick={e => this.handleClick(e)}>
            <A
              active={this.portfolios.includes(this.state.activeSection)}
              navColor={this.state.navColor}
              id="portfolio"
              href="#"
            >
              Portfolio
            </A>
          </ListItem>
          <ListItem onClick={e => this.handleClick(e)}>
            <A
              active={this.service.includes(this.state.activeSection)}
              navColor={this.state.navColor}
              id="services"
              href="#"
            >
              Services
            </A>
          </ListItem>
          <ListItem onClick={e => this.handleClick(e)}>
            <A active={this.state.activeSection === 'contact'} navColor={this.state.navColor} id="contact" href="#">
              Contact
            </A>
          </ListItem>
        </List>
      </Wrapper>
    );
  }
}

export default SideNav;
