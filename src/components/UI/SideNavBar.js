import { NavLink } from "react-router-dom";
import { Box, Flex, Image, VStack, IconButton, Button, Text, StackDivider } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Logo from "../../assets/images/Logo.png";
import React, { useState } from 'react';
import { css } from "@emotion/react";


const closeButtonStyles = css`
  margin-top: 1.5rem; 
  margin-right: 0.8rem;
  color: black;
  height: 3.5rem;
  width: 3.5rem; 
  border-radius: 50%;
  svg {
    width: 1.5rem;
    height: 1.5rem; 
  }
  &:hover {
    background-color: orange;
    border-radius: 50%;
  }
`;

function SideNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <>
      {/* NavBar on top*/}
      <Flex width="100vw" height="100%" bg="#4591C4" display="grid" gridTemplateColumns="repeat(5, 1fr)" alignItems="center">
        {/* Logo Image  */}
        <NavLink exact to='/'>
        <Image src={Logo} alt="Logo" width="6rem" p="0.5rem" cursor="pointer" />
        </NavLink>
        {/* Menu Button */}
        <IconButton
          onClick={onOpen}
          icon={<HamburgerIcon boxSize={8} />}
          gridColumnStart={5}
          borderRadius="50%"
          bgColor="#4591C4"
          height="4rem"
          width="4rem"
          justifySelf="end"
          marginRight="1rem"
          _hover={{ 
            bgColor: "orange.300",
            borderRadius: "50%" 
          }}
        /> 
      </Flex>
      
      {/* Side NavBar show up when click on Menu button */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#4591C4">
        <DrawerCloseButton css={closeButtonStyles} />   

          {/* Menu List containter */}
          <DrawerBody padding="3rem" marginTop="5rem" color="white" fontWeight="bold">
          <VStack spacing="2.5rem">
            {/* Other page links */}
            <Box _hover={{ color: "orange.300" }} _active={{ color: "blue.400" }}><NavLink to="/" onClick={onClose}>Home</NavLink></Box>
            <Box _hover={{ color: "orange.300" }} _active={{ color: "blue.400" }}><NavLink to="/about-melanoma" onClick={onClose}>All About Melanoma</NavLink></Box>
            <Box _hover={{ color: "orange.300" }} _active={{ color: "blue.400" }}><NavLink to="/detection" onClick={onClose}>Detection Tools</NavLink></Box>
            <Box _hover={{ color: "orange.300" }} _active={{ color: "blue.400" }}><NavLink to="/your-voice" onClick={onClose}>Your Voice!</NavLink></Box>   
          </VStack>  
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNavBar;
