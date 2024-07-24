import React from "react";
import { Box, Container, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button } from '@chakra-ui/react'
import suncreamBg from '../../assets/images/suncreamBg.png';

function Home() {
  return (
    <Box as="main">
      {/* --------------------Welcome Section-------------------- */}
      <Box
        position="relative"
        bgImage={`url(${suncreamBg})`}
        bgSize="80%"
        bgRepeat="no-repeat"
        bgPosition="bottom"
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
      <Divider mt="2rem" />
      {/* --------------------Why Melanoma Section-------------------- */}
      <Container p="10">
        <Heading as="h2" size="lg">
          Why Melanoma Equity?
        </Heading>
        <Text>
          Melanoma is a serious form of skin cancer that can affect anyone, regardless of their skin color or background. However, non-white individuals often face disparities in diagnosis and treatment due to a lack of tailored information and resources. At Melanoma Equity, we are committed to bridging this gap by offering accessible, accurate, and inclusive information to ensure everyone has a fair chance to protect their skin health.
        </Text>
      </Container>
      <Divider mt="2rem" />

       {/* ---------------------What we offer Section------------------- */}
      <Container p="10"
      maxWidth="5xl">
        <Heading  textAlign="center" mb="2rem">
          What We Offer
        </Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {/* First service: all about melanoma  */}
          <Card>
            <CardHeader>
              <Heading size='md'>All About Melanoma</Heading>
            </CardHeader>
            <CardBody>
            <Divider />

              <Text>Comprefensive informations about Melanoma</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        {/* Second service: detection tool */}
          <Card>
            <CardHeader>
              <Heading size='md'>Detection Tool</Heading>
            </CardHeader>
            <CardBody>
              <Text>Use our tool to check if a mole is benign or malignant</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        {/* Third service: Resources */}
          <Card>
            <CardHeader>
              <Heading size='md'>Resources</Heading>
            </CardHeader>
            <CardBody>
              <Text>Finiding suncreens, clicnic. </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          {/* Fourth service: Your voice! */}
          <Card>
            <CardHeader>
              <Heading size='md'>Your Voice!</Heading>
            </CardHeader>
            <CardBody>
              <Text>Share your story, images to combat melanoma</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
      <Divider />

      <Container p="10">
        <Heading>
        Our Commitment to Health Equity
        </Heading>
        <Text>
          Health equity means ensuring that everyone has a fair and just opportunity to achieve their best possible health. We believe that by providing targeted resources and fostering awareness, we can make a significant impact in the fight against melanoma, especially for those who are often overlooked.
        </Text>
        <Text>
          Join us in this mission. Explore our website, use our tools, and become a part of the Melanoma Equity community today.
        </Text>
      </Container>
    </Box>
  );
}

export default Home;
