import React from "react";
import { Container, Heading, Text, Divider, Image } from "@chakra-ui/react";
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import TypesOfSkinCancer from '../../../assets/images/TypesOfSkinCancer.jpeg'
import Melanocyte from '../../../assets/images/Melanocyte.jpeg'
import BasalCell from '../../../assets/images/BasalCell.jpg'
import SquamousCell from '../../../assets/images/SquamousCell.jpg'
import Melanoma from '../../../assets/images/melanoma01.jpg'
import Section from "../../../components/UI/Section";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
} from '@chakra-ui/react'

function Overview() {
    return (
        <Container maxWidth="4xl" as="main" lineHeight='2'>
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="Melanoma Overview"
            />
            {/* ---------TITLE & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.5rem">Melanoma Overview</Heading>
            <Text border="0.2rem" bgColor="yellow.100" p="0.5rem">
                Skin cancer, including melanoma, is one of the most common cancers worldwide. While melanoma accounts for a smaller percentage of skin cancer cases, it is significantly more dangerous due to its potential to spread to other parts of the body.
                In this section, you'll learn what melanoma is, common symptoms to watch out for, key risk factors, and practical prevention tips to help you reduce your risk.
            </Text>
            {/* -------I. WHAT IS SKIN CANCER? ------- */}
            <Section
                titleH2="What is Melanoma?"
                text="Melanoma is the most dangerous type of skin cancer, resulting from damage to the DNA in melanocyte cells of the skin. These cells create melanin, which gives skin its color. When the DNA in these cells is damaged, it can cause mutations that lead to uncontrolled cell growth and the development of malignant tumors."
            />
            <Image src={Melanocyte} alt="melanocyte illustration in skin cell" boxSize='sm' width='fit-content' margin="0 auto" />


            {/* ------ 3 COMMON TYPE OF SC-------- */}
            <Section
                text="In addition to melanoma, there are other common types of skin cancer, including basal cell carcinoma and squamous cell carcinoma. The comparison board below highlights the key differences and characteristics of these three skin cancers."
            />
            {/* <Image src={TypesOfSkinCancer} alt='3 types of skin cancer' boxSize='sm' width='fit-content' margin="0 auto"/> */}
            <TableContainer
                whiteSpace="normal"
                wordWrap="break-word"
                overflowX="auto"
            >
                <Table size='md'>
                    <TableCaption>Comparison between 3 common types of skin cancer</TableCaption>
                    <Thead bgColor="blue.200">
                        <Tr>
                            <Th>Basal Cell Carcinoma(BCC)</Th>
                            <Th>Squamous Cell Carcinoma(SCC)</Th>
                            <Th>Melanoma</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Image src={BasalCell} alt='Small, reddish/brownish papule, often with telangiectatic blood vessels. May appear transluscent, and when it is, described as "pearly" in color. May have a central depression with rolled borders.' width='fit-content' /></Td>
                            <Td><Image src={SquamousCell} alt="Photograph showing the side of a person's face with a skin cancer lesion (squamous cell carcinoma) that looks raised and crusty." width='fit-content' /></Td>
                            <Td><Image src={Melanoma} alt="Melanoma on a patient's skin." width='fit-content' /></Td>
                        </Tr>
                        <Tr>
                            <Td>Most common form of skin cancer.</Td>
                            <Td>Second most common form of skin cancer.</Td>
                            <Td>Less common than BCC and SCC but accounts for the majority of skin cancer deaths.</Td>
                        </Tr>
                        <Tr>
                            <Td>Typically occurs in sun-exposed areas such as the face, neck, and hands.
                            </Td>
                            <Td>Often occurs in sun-exposed areas but can also develop in scars or chronic wounds.</Td>
                            <Td>Can start in a mole but also in other pigmented tissues like the eye (ocular melanoma) or intestines.</Td>
                        </Tr>
                        <Tr>
                            <Td>Least dangerous; rarely spreads (metastasizes) but can cause significant local damage if left untreated.</Td>
                            <Td> Rarely fatal when treated promptly; can metastasize if neglected.</Td>
                            <Td>Most dangerous form of skin cancer; high potential for metastasis and can be fatal if not detected and treated early.</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <Section
                titleH2="How does Melanoma look like?"
                text="Melanoma can start as a new spot or change from an old mole. The main sign to watch for is a mole that looks different or changes over time.
        Early signs of melanoma can be remembered using the ABCDE check list: "
            />
            <Section
                titleH2="Risk Factors"
                text="Anything that increases a person's chance of getting a disease is called a risk factor"
            />
            <Section
                titleH2="Prevention Tips"
                text="Preventing melanoma is the same as preventing all sort of skin cancer: "
            />
            <Section
                titleH2="How can Melanoma be treated?"
                text="Patients with melanoma have several treatment options available."
            />
            <Divider />
            {/* Reference Section */}
            <Heading as="h3" size="0.8rem">References:</Heading>
            <OrderedList>
                <ListItem>National Institutes of Health (NIH). "Melanoma Overview." <a href="https://www.cancer.gov/types/skin/melanoma" target="_blank" rel="noopener noreferrer">Link to NIH page</a></ListItem>
                <ListItem>Wikipedia. "Melanoma." <a href="https://en.wikipedia.org/wiki/Melanoma" target="_blank" rel="noopener noreferrer">Link to Wikipedia page</a></ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
            </OrderedList>


        </Container>
    );
}

export default Overview;