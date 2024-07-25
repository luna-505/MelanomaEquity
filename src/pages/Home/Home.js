import React from "react";
// import Chakra UI components
import { Box, Container, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Image, Center } from '@chakra-ui/react'
// import components
import { NavLink } from "react-router-dom";

// Import images 
import IconInfo from '../../assets/images/IconInfo.png'
import IconDetect from '../../assets/images/IconDetect.png'
import IconVoice from '../../assets/images/IconVoice.png'

function Home() {
  return (
    <Box as="main">
      {/* --WELCOME SECTION--- */}
      <Box
        position="relative"
        height={{ base: "50vh", md: "60vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: "2rem", md: "4rem" }}
      >
        <Container maxWidth="3xl" p="10">
          <Heading as="h1" mt="3rem" textAlign="center" color="blue.300" size="2xl">
            Welcome to Melanoma Equity
          </Heading>
          <Text mt="1rem" textAlign="center">
            Welcome to Melanoma Equity, your comprehensive resource for understanding, detecting, and preventing melanoma. Our mission is to raise awareness about melanoma and provide essential resources for early detection and prevention.
          </Text>
        </Container>
      </Box>
      <Divider/>
      {/* --PURPOSE SECTION-- */}
      <Container p="3rem" textAlign="center">
        <Heading as="h2" size="lg" >
          Why Melanoma Equity?
        </Heading>
        <Text>
          Melanoma is a serious form of skin cancer that can affect anyone, regardless of their skin color or background. However, non-white individuals often face disparities in diagnosis and treatment due to a lack of tailored information and resources. At Melanoma Equity, we are committed to bridging this gap by offering accessible, accurate, and inclusive information to ensure everyone has a fair chance to protect their skin health.
        </Text>
      </Container>
      <Divider />



      {/* --SERVICES INTRODUCTION SECTION--*/}
      <Container 
        pt="3rem"
        pb="3rem"
        maxWidth="5xl">
        <Heading textAlign="center" mb="2rem">
          What We Offer
        </Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' >
          {/* First service: all about melanoma  */}
          <Card
            sx={{
              transition: 'transform 0.2s',
              _hover: {
                transform: 'scale(1.02)',
                boxShadow: 'lg',
              },
            }}>
            <CardHeader>
              <Heading size='md'>All About Melanoma</Heading>
            </CardHeader>
            <CardBody>
              <Image src={IconInfo} alt="a stack of 3 book" height="10rem" marginX="auto" />
              <Text>Comprefensive informations about Melanoma</Text>
            </CardBody>
            <CardFooter>
              <NavLink to="/about-melanoma">
                <Button>View here</Button></NavLink>
            </CardFooter>
          </Card>

          {/* Second service: detection tool */}
          <Card
            sx={{
              transition: 'transform 0.2s',
              _hover: {
                transform: 'scale(1.02)',
                boxShadow: 'lg',
              },
            }}>
            <CardHeader>
              <Heading size='md'>Detection Tool</Heading>
            </CardHeader>
            <CardBody>
              <Image src={IconDetect} alt="a small robot" height="10rem" marginX="auto" />
              <Text>Use our tool to check if a mole is benign or malignant</Text>
            </CardBody>
            <CardFooter>
              <NavLink to="/detection">
                <Button>View here</Button>
              </NavLink>
            </CardFooter>
          </Card>

          {/* Third service: Your voice! */}
          <Card
            sx={{
              transition: 'transform 0.2s',
              _hover: {
                transform: 'scale(1.02)',
                boxShadow: 'lg',
              },
            }}>
            <CardHeader>
              <Heading size='md'>Your Voice!</Heading>
            </CardHeader>
            <CardBody>
              <Image src={IconVoice} alt="a phone with pop up conversation" height="10rem" marginX="auto" />
              <Text>Share your story, images to combat melanoma</Text>
            </CardBody>
            <CardFooter>
              <NavLink to="/your-voice">
                <Button>View here</Button>
              </NavLink>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
      <Divider />
      
      {/* --HEALTH EQUITY SECTION-- */}
      <Container p="10">
        <Heading>
          Our Commitment to Health Equity
        </Heading>
        <Text>
          Health equity means ensuring that everyone has a fair and just opportunity to achieve their best possible health. We believe that by providing targeted resources and fostering awareness, we can make a significant impact in the fight against melanoma, especially for those who are often overlooked.
        </Text>
      </Container>
    </Box>
  );
}

export default Home;
