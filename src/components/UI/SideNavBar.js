import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/Logo.png"
import React, {useState} from 'react';

// get the menu icon component from google font 
const MenuIcon = ({onClick}) => (
  <StyledMenuIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  onClick={onClick}>
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </StyledMenuIcon>
);

// get the close icon from google font 
const CloseIcon = ({onClick}) => (
  <StyledCloseIcon xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960" onClick={onClick} >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </StyledCloseIcon>
);

// ------------- CSS for each component ----------
const NavContainer = styled.div`
  width: 100vw; 
  height: 100%; // so that it will fit with the content 
  background-color: ${props => props.theme.colors.darkblue};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
`;

const Logo = styled.img`
  width: 10rem;  
  grid-column-start: 1; 
  padding: 0.3rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.darkblue};
  backdrop-filter: blur(10px);
  box-shadow: -1rem 0 10px rgba(0, 0, 0, 0.1);
  
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40vw;
  z-index: 999;
  
  /* Use conditional rendering to display the nav */
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;

  transition: 1s ease-out; 
`;

const NavList = styled.ul`
  list-style: none;
  padding-top: 1rem;
`;

const NavItem = styled.li`
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  height: 100%;
  padding: 1rem 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;

  &.active {
    background-color: ${props => props.theme.colors.lightblue};
    color: white;
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightblue};
  }
`;

const StyledMenuIcon = styled.svg`
  fill: ${props => props.theme.colors.lightblue}; 
  width: 3rem; 
  grid-column-start: 5;
  justify-self: end; 
  padding: 0.5rem; 
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.lightorange};
    border-radius: 50%;
  }
`;

const StyledCloseIcon = styled.svg`
  color: ${props => props.theme.colors.darkblue};
  width: 3rem; 
  padding: 0.5rem;
  align-self: flex-end; 
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.lightorange};
    border-radius: 50%;
  }
`;

// -------------- JSX with styled components ------------

function SideNavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <NavContainer >
        <Logo src={logo} alt="Logo" />
        <MenuIcon onClick={toggleSidebar}/>  
      </NavContainer>

      <Nav isVisible={sidebarVisible}>
       <CloseIcon onClick={toggleSidebar}/>
        <NavList>
          <NavItem><StyledNavLink exact to="/">Home</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/about-melanoma">All About Melanoma</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/detection">Detection Tools</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/resources">Resources</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/your-voice">Your Voice!</StyledNavLink></NavItem>
        </NavList>
      </Nav>
    </>
  );
}

export default SideNavBar;
