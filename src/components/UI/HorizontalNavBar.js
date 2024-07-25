import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import { Flex, Box, Image, HStack, Menu, MenuList, MenuButton, MenuItem, Button } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons';

// Link path to use map funciton 
const navItems = [
  { path: '/about-melanoma', label: 'All About Melanoma' },
  { path: '/detection', label: 'Detection Tools' },
  { path: '/resources', label: 'Resources' },
  { path: '/your-voice', label: 'Your Voice!' },
];

function HorizontalNavBar() {
  return (
    <Flex as="nav" 
      bg="#382c6e"
      width="100%" 
      backdropFilter="blur(4rem)" 
      boxShadow="0 0 4rem rgba(0, 0, 0, 0.2)">

      {/* Logo Image which links to home page */}
      <NavLink exact to='/'>
        <Image src={Logo} 
          alt="Logo" 
          width="6rem" 
          p="0.5rem" 
          ml="1rem" 
          cursor="pointer" />
      </NavLink>

      {/* Other pages link */}
      <HStack as="ul" 
        listStyleType="none" 
        width="100%" 
        alignItems="center">
          {/* All About Melanoma links list */}
          {/* <Box as="li">
            <Menu >
              <MenuButton 
                as={Button} 
                rightIcon={<ChevronDownIcon />}
                bg="blue.500" 
                color="white" 
                _hover={{  color: "blue.600" }}
                _active={{ color: "blue.600" }}
              >
                All About Melanoma
              </MenuButton>
                <MenuList>
                  <MenuItem><NavLink to="/about-melanoma">View All</NavLink></MenuItem>
                  <MenuItem>What is it?</MenuItem>
                  <MenuItem>Risk Factors & Statistics</MenuItem>
                  <MenuItem>Prevention</MenuItem>
                </MenuList>
            </Menu>
          </Box> */}

        {/* Dectection tool, Resources & Your Voice! links */}
        {navItems.map((item, index) => (
          <Box 
            as="li" 
            p="0 1rem" 
            key={index} color="white" 
            _hover={{ color: "blue.600" }}
            _active={{ color: "blue.400" }}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </Box>
        ))}
      </HStack>
    </Flex>
  );
}

export default HorizontalNavBar;
