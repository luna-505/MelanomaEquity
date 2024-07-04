import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/Logo.png"


// ------------- CSS for each components ----------
const Nav = styled.nav `
    background-color: ${props => props.theme.colors.darkblue};
    display: flex; 
    width: 100%;

    backdrop-filter: blur(4rem); 
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.6);
  
`;

const NavList = styled.ul `
    width: 100%;
    list-style: none; 
    display: flex;
    align-items: center;
`; 

const NavItem = styled.li `
    padding: 0 0.4rem; 
`;

const StyledNavLink = styled(NavLink)`
    height: 100%; 
    text-decoration: none; 
    color: black;
    cursor: pointer;
    padding: 0.5rem;
  
  &.active {
    color: white;
    background-color: ${props => props.theme.colors.lightblue}; 
    border-radius: 46%;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.lightblue}; 
    border-radius: 46%;
  }
`;

const Logo = styled.img`
  width: 10rem;  
  grid-column-start: 1; 
  padding: 0.3rem;
  margin-left: 0.5rem; 
`;
const LogoLink = styled(NavLink)`
    display: inline-block;
    cursor: pointer;
`;

// -------------- JSX with styled component------------
// NavLink can detect which link is active 
function HorizontalNavBar() {
    return (
            <Nav>
                <LogoLink exact to='/'><Logo src={logo} alt="Logo" /></LogoLink>
                <NavList>
                    <NavItem><StyledNavLink to='/about-melanoma'>All About Melanoma</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to='/detection'>Detection Tools</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to='/resources'>Resources</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to='/your-voice'>Your Voice!</StyledNavLink></NavItem>
                </NavList>
            </Nav>
    )
}

export default HorizontalNavBar;
