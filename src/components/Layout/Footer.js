import { Box,  Text, Flex, Image, List, Center, ListItem, Icon} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png"; 
import { NavLink } from "react-router-dom";
import { EmailOutline } from "@emotion-icons/evaicons-outline/EmailOutline";
import {Instagram} from "@emotion-icons/entypo-social/Instagram"; 
import { TwitterOutline } from "@emotion-icons/evaicons-outline/TwitterOutline";

function Footer(){
    return (
        <Box as="footer" bg="purple.400" >
            {/* Flex Div that contains all the footer's content */}
            <Flex 
                flexWrap="wrap" 
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }} 
                gap="5%" ml="10%" mr="10%" pt="2%" 
                justifyContent="space-around" 
                alignItems="center">
                {/* Logo and Name section  */}
                <Box display="flex" flexDirection="column">
                    {/* Website Name */}
                    {/* <Text fontSize="xl" letterSpacing="widest" fontWeight="bold" textAlign="center">Melanoma Equity</Text> */}
                    {/* Website Logo */}
                    <Image 
                        src={Logo}
                        alt="Logo"
                        width="7rem" 
                        margin="auto"
                    />
                </Box>  
                {/* Quick Links section */}
                <Box>
                    <Text fontWeight="bold" textAlign="center">Quick Links</Text>
                    <List 
                        display="flex" 
                        flexDirection={{ base: 'column', md: 'row', lg: 'row' }} 
                        gap={{ base: '0', md: '1rem', lg: '1rem' }} 
                        alignItems="center"
                        textDecoration="underline"
                        >
                        {/* All About Melanoma & Detection Tool */}
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <ListItem _hover={{color: 'blue.400'}}><NavLink to="/">Home</NavLink></ListItem>
                            <ListItem _hover={{color: 'blue.400'}}><NavLink to="about-melanoma">All About Melanoma</NavLink></ListItem>
                        </Box>
                        {/* Resouces & Your Voice! */}
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <ListItem _hover={{color: 'blue.400'}}><NavLink to="detection">Detection Tool</NavLink></ListItem>
                            <ListItem _hover={{color: 'blue.400'}}><NavLink to="your-voice">Your Voice!</NavLink></ListItem>
                        </Box>
                    </List>
                </Box>  
                {/* Social Links Section */}
                <Box>
                    <Text fontWeight="semibold" textAlign="center">Social</Text>
                    <List display="flex" justifyContent="center">
                        {/* Email */}
                        <ListItem marginRight="1rem">
                            <Icon as={EmailOutline} />
                        </ListItem>
                        {/* Instagram */}
                        <ListItem mr="1rem">
                            <Icon as={Instagram} />
                        </ListItem>
                        {/* Twitter */}
                        <ListItem>
                            <Icon as={TwitterOutline} />
                        </ListItem>
                    </List>
                </Box>
            </Flex>
            {/* Copyrights Section */}
            <Center as="p" fontSize="0.7rem">
                     2024 &copy; MelanomaEquity
            </Center>
        </Box>
    )
}

export default Footer; 