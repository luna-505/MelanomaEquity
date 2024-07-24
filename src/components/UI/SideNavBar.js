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
      <Flex width="100vw" height="100%" bg="blue.500" display="grid" gridTemplateColumns="repeat(5, 1fr)" alignItems="center">
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
          bgColor="blue.500"
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
        <DrawerContent bg="blue.500">
        <DrawerCloseButton css={closeButtonStyles} />   

          {/* Menu List containter */}
          <DrawerBody padding="3rem" marginTop="5rem" color="white">
          <VStack spacing="2.5rem">
            {/* All About Melanoma Links */}
            <Box >
            <Accordion allowToggle>
                <AccordionItem border="0">
                  {/* ALL about melanoma dropdown link button */}
                    <AccordionButton pb={0.4}>
                      <Box textAlign='left'>
                        All About Melanoma
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  {/* All about melanoma link list */}
                  <AccordionPanel>
                  <VStack spacing="1rem"  align="start">
                    {/* What is it? */}
                    <Box color="white" _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}>
                      <NavLink to="/about-melanoma"onClick={onClose}>View All</NavLink>
                    </Box>
                    <Box color="white" _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}>
                      <NavLink to="/detection"onClick={onClose}>What is it?</NavLink>
                    </Box>
                    {/* Risk factors */}
                    <Box _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}>
                      <NavLink to="/resources" onClick={onClose}>Risk factors & Statistic</NavLink>
                    </Box>
                    <Box _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}>
                      <NavLink to="/your-voice" onClick={onClose}>Prevention</NavLink>
                    </Box>  
                  </VStack>
                  </AccordionPanel>
                </AccordionItem>    
              </Accordion> 
            </Box> 
            {/* Other page links */}
            <Box _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}><NavLink to="/detection" onClick={onClose}>Detection Tools</NavLink></Box>
            <Box _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}><NavLink to="/resources" onClick={onClose}>Resources</NavLink></Box>
            <Box _hover={{ color: "blue.300" }} _active={{ color: "blue.400" }}><NavLink to="/your-voice" onClick={onClose}>Your Voice!</NavLink></Box>   
          </VStack>  
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNavBar;
