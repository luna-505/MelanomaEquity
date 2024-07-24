import React from "react";
import { Box, Container, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Image } from '@chakra-ui/react'
import WhatIsIt1 from '../../assets/images/WhatIsIt1.jpg'
import { NavLink } from "react-router-dom";


const cardItems = [
  { 
    heading: 'Melanoma Overview', 
    ImgSrc: WhatIsIt1, 
    tag: 'learn', 
    description: 'Learn about melanoma, its symptoms, risk factors, and prevention tips.',
    path: 'overview'
  },
  { 
    heading: 'Myths about Melanoma', 
    ImgSrc: WhatIsIt1, 
    tag: 'learn', 
    description: 'Debunk common myths and learn the facts about melanoma to stay informed and protected.',
    path: 'myths'
  },
  { 
    heading: 'Melanoma Statistics', 
    ImgSrc: WhatIsIt1, 
    tag: 'learn', 
    description: 'Explore key statistics about melanoma, including incidence, mortality, and disparities affecting different communities.',
    path: 'statistics'
  },
  { 
    heading: 'How to prevent it?', 
    ImgSrc: WhatIsIt1, 
    tag: 'prevention', 
    description: 'Learn about Melanoma, symptoms, types, etc.',
    path: 'prevention'
  },
  { 
    heading: 'How to wear sunscreen properly', 
    ImgSrc: WhatIsIt1, 
    tag: 'learn', 
    description: 'Sunscreen is important',
    path: 'how-to-wear-sunscreen'
  },
  { 
    heading: 'Melanoma Images', 
    ImgSrc: WhatIsIt1, 
    tag: 'learn', 
    description: 'Melanoma in different skin tons',
    path: 'how-to-wear-sunscreen'
  },
];

function AboutMelanoma() {
  return (
    <Container maxWidth="7xl" as="main">
      <Heading textAlign="center" p="2rem">All the information you need</Heading>
      <SimpleGrid m="3rem" spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {cardItems.map((item, index) => (
          <NavLink to={item.path} key={index}>
            <Card variant="unstyled">
              <CardHeader>
                <Image src={item.ImgSrc} alt={item.heading} />
                <Text bgColor="blue.200" width="fit-content" pl="0.2rem" pr="0.2rem" mt="0.3rem">{item.tag}</Text>
                <Heading size="md">{item.heading}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{item.description}</Text>
              </CardBody>
            </Card>
          </NavLink>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default AboutMelanoma;