import React from "react";
// import Chakra UI components
import { Container, Heading, Text, Image, Box, UnorderedList } from "@chakra-ui/react";
import { List, ListItem, ListIcon, OrderedList } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
// import UI components 
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import TableOfContents from "../../../components/UI/TOC";
import Reference from "../../../components/UI/References";
// import images 
import RiskFactor from '../../../assets/images/RiskFactors.png'

// Content: this page is about all the risk factors of melanoma

// ID for each sections to link to the table of content
const sections = [
    { id: 'WhatAreRFs', title: 'What are risk factos?' },
    { id: 'MelanomaRFs', title: 'Common Risk Factors for Melanoma' }
];

// references list
const references = [
    // 1
    "National Cancer Institute. (2024, April 16). Melanoma Treatment (PDQ®)–Health Professional Version."
];

function RiskFactors() {
    return (
        <Container maxWidth="4xl" as="main" lineHeight='2'>
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="What Increases Your Risk of Melanoma?"
            />
            {/* ---------TITLE, TABLE OF CONTENT & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.7rem">What Increases Your Risk of Melanoma?</Heading>
            <TableOfContents sections={sections} />
            <Text mt="0.5rem">
                Understanding the risk factors for melanoma can help you be more aware of your chances of developing the disease. It's important to note that not everyone with risk factors will develop melanoma, and some people without any known risk factors may still get the disease. Always consult with your doctor if you think you may be at risk.
            </Text>
            <Image src={RiskFactor} alt="Illustration for each melanoma's risk factors" mt="1rem" mb="1rem" />

            {/* I. WHAT ARE RISK FACTORS */}
            <Box id="WhatAreRFs">
                <Heading as="h2" pt="0.5rem">What Are Risk Factors?</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                    Risk factors are anything that increases a person's chance of getting a disease. When it comes to melanoma, several factors may increase the likelihood of developing this type of skin cancer.
                </Text>
            </Box>

            {/* II. COMMON RISK FACTORS FOR MELANOMA */}
            <Box id="MelanomaRFs">
                <Heading as="h2" pt="0.5rem">Common Risk Factors for Melanoma</Heading>
                <OrderedList spacing={3} mt="1rem">
                    <ListItem>
                        <Text fontWeight="bold">Fair Complexion:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Fair skin that freckles and burns easily, does not tan, or tans poorly.</ListItem>
                            <ListItem>Blue, green, or other light-colored eyes.</ListItem>
                            <ListItem>Red or blond hair.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Sun Exposure:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Being exposed to natural sunlight.</ListItem>
                            <ListItem>Using artificial sunlight sources, such as tanning beds.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Environmental Factors:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Exposure to certain elements in the air, your home, or workplace.</ListItem>
                            <ListItem>Exposure to substances in food and water.</ListItem>
                            <ListItem>Environmental risk factors include radiation, solvents, vinyl chloride, and PCBs.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Sunburn History:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Having a history of many blistering sunburns, especially during childhood or teenage years.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Moles:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Having several large moles or many small moles.</ListItem>
                            <ListItem>Family history of unusual moles (atypical nevus syndrome).</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Family and Personal History:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Having a family or personal history of melanoma.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Race and Complexion:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Being White or having a fair complexion.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <Text ml={2}>
                        <ListIcon as={WarningIcon} color="red.500" />
                        While being White or having a fair complexion increases the risk of melanoma, it's important to understand that anyone can develop this skin cancer, including individuals with dark skin. Regardless of your skin color, staying informed and taking preventive measures is crucial.
                    </Text>
                    <ListItem>
                        <Text fontWeight="bold">Immune System:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Having a weakened immune system.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Genetic Factors:</Text>
                        <UnorderedList spacing={1} ml={5}>
                            <ListItem>Certain genetic changes linked to melanoma.</ListItem>
                        </UnorderedList>
                    </ListItem>
                </OrderedList>
                <Text></Text>

            </Box>




            {/* Reference Section */}
            <Reference references={references} />



        </Container>
    );
}

export default RiskFactors;
