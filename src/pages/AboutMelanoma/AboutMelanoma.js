import React from "react";
import { Box, Container, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Image } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import WhatIsIt from '../../assets/images/WhatIsMelanoma.png'
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import PreventionPic from '../../assets/images/Prevention.png'
import RiskFactors from '../../assets/images/RiskFactors.png'
import FactsMyth from '../../assets/images/FactsMyths.png'
import Suncream from  '../../assets/images/Suncream.png'

const cardItems = [
  { 
    heading: 'What is Melanoma?', 
    ImgSrc: WhatIsIt, 
    tag: 'learn', 
    description: 'Learn about melanoma, the most dangerous type of skin cancer, including its causes, characteristics, and how it compares to other common skin cancers.',
    path: 'overview'
  },
  { 
    heading: 'What Increases Your Risk of Melanoma?', 
    ImgSrc: RiskFactors, 
    tag: 'learn', 
    description: 'Understand the key factors that increase your risk of melanoma, including genetics, environment, and lifestyle.',
    path: 'risk-factors'
  },
  { 
    heading: 'How Can You Prevent Melanoma?', 
    ImgSrc: PreventionPic, 
    tag: 'prevention', 
    description: 'Discover effective strategies for melanoma prevention, including sun protection, regular skin checks, and healthy lifestyle choices.',
    path: 'prevention'
  },
  { 
    heading: 'Myths about Melanoma', 
    ImgSrc: FactsMyth, 
    tag: 'learn', 
    description: 'Debunk common myths and learn the facts about melanoma to stay informed and protected.',
    path: 'myths'
  },
  { 
    heading: 'Melanoma Statistics', 
    ImgSrc: WhatIsIt, 
    tag: 'learn', 
    description: 'Explore key statistics about melanoma, including incidence, mortality, and disparities affecting different communities.',
    path: 'statistics'
  },
  { 
    heading: 'How to wear sunscreen properly', 
    ImgSrc: Suncream, 
    tag: 'learn', 
    description: 'Sunscreen is important',
    path: 'how-to-wear-sunscreen'
  },
  { 
    heading: 'Melanoma Images', 
    ImgSrc: WhatIsIt, 
    tag: 'learn', 
    description: 'Melanoma in different skin tons',
    path: 'how-to-wear-sunscreen'
  },
];

function AboutMelanoma() {
  return (
    <Container maxWidth="4xl" as="main" marginBottom="2rem">
    <Breadcrumbs 
      items={[
          { label: 'Home', path: '/' }
      ]} 
      currentPage="All About Melanoma" 
    />
      <Heading textAlign="center" mt="3rem">All the information you need</Heading>
      <SimpleGrid mt="3rem" spacing={7} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        
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