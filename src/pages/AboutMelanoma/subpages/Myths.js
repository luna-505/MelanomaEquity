import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import Section from "../../../components/UI/Section";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    Divider
  } from '@chakra-ui/react'

function Myths() {
    return(
        <Container maxWidth="5xl" as="main">
        <Breadcrumbs 
        items={[
            { label: 'All About Melanoma', path: '/about-melanoma' }
        ]} 
        currentPage="Melanoma Myth" 
        />
            <Heading as="h1" textAlign="center" p="0.5rem">Facts & Myths about Melanoma </Heading>
            <Text border="0.2rem" bgColor="yellow.100" p="0.5rem">
            Understanding the truth about melanoma is crucial for prevention, early detection, and treatment. By separating myths from facts, we hope to empower you with knowledge that can help protect your skin and overall health.
            </Text>

            <Section 
                titleH2='Myth 1: "Only fair-skinned people get melanoma."'
                text="Fact: While melanoma is more common in fair-skinned individuals, it can affect people of all skin tones. It often goes undetected longer in darker-skinned individuals, making awareness crucial"
            />

            <Section 
                titleH2='Myth 2: “Skin cancer isn’t dangerous”'
                text="Fact: Although certain types of skin cancer can be effectively treated with high survival rates, melanoma remains the most lethal form. The American Cancer Society (ACS) reports a significant increase in melanoma diagnoses over recent decades, with an estimated 7,650 fatalities projected for 2022. Therefore, it is crucial to consult a doctor if any unusual changes in the skin are observed."
            />
            <Section 
                titleH2='Myth 3: "Melanoma only occurs on sun-exposed skin."'
                text="Fact: Melanoma can develop on any part of the body, including areas not typically exposed to the sun, such as the soles of the feet or under the nails."
            />
            <Section 
                titleH2='Myth 4: "A tan protects you from melanoma."'
                text="Fact: Tanning, whether from the sun or tanning beds, increases your risk of melanoma because it involves exposure to harmful UV rays."
            />
            <Section 
                titleH2='Myth 5: "You don’t need to worry about melanoma until you’re older."'
                text="Melanoma can occur at any age, even in young adults and teenagers. Early detection and prevention are key regardless of age."
            />
            {/* Reference Section */}
        <Divider />
        <Heading as="h3" size="0.8rem">References:</Heading>
        <OrderedList>
            <ListItem>National Institutes of Health (NIH). "Melanoma Overview." <a href="https://www.cancer.gov/types/skin/melanoma" target="_blank" rel="noopener noreferrer">Link to NIH page</a></ListItem>
            <ListItem>Wikipedia. "Melanoma." <a href="https://en.wikipedia.org/wiki/Melanoma" target="_blank" rel="noopener noreferrer">Link to Wikipedia page</a></ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
        </OrderedList>

        </Container>
    );
}

export default Myths;
