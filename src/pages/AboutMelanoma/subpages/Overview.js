import React from "react";
// import Chakra components
import { Container, Heading, Text, Divider, Image, Box } from "@chakra-ui/react"
import { List, ListItem, ListIcon, OrderedList } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
// import UI components
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import TableOfContents from "../../../components/UI/TOC";
import Reference from "../../../components/UI/References";
// import images
import Melanocyte from '../../../assets/images/Melanocyte.jpeg'
import BasalCell from '../../../assets/images/BasalCell.jpg'
import SquamousCell from '../../../assets/images/SquamousCell.jpg'
import Melanoma from '../../../assets/images/melanoma01.jpg'
import WhatIsMelanoma from '../../../assets/images/WhatIsMelanoma.png'
import ABCDEList from '../../../assets/images/ABCDEList.png'

//  Content: overview page about melanoma, what is it, how does it looks like & how can it be treated

// ID for each sections to link to the table of content
const sections = [
    { id: 'understanding', title: 'Understanding Melanoma' },
    { id: 'look', title: 'How does Melanoma look like?' },
    { id: 'treatement', title: 'How can Melanoma be treated?' }
];

// Reference list
const references = [
    // 1
    "American Cancer Society. (2024, January 17). Key Statistics for Melanoma Skin Cancer.",
    // 2
    "National Cancer Institute. (2024, April 16). Melanoma Treatment (PDQ®)–Health Professional Version.",
    // 3
    "McDaniel, B., Badri, T., & Steele, R.B. (2024, March 13). Basal Cell Carcinoma. In StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing. Available from: https://www.ncbi.nlm.nih.gov/books/NBK482439/",
    // 4
    "Howell, J.Y., Hadian, Y., & Ramsey, M.L. (2024, March 27). Squamous Cell Skin Cancer. In StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing. Available from: https://www.ncbi.nlm.nih.gov/books/NBK441939/",
    // 5
    "National Cancer Institute.  Moles to Melanoma: Recognizing the ABCDE Features",

];

function Overview() {
    return (
        <Container maxWidth="4xl" as="main" lineHeight='2'>
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="What Is Melanoma?"
            />
            {/* ---------TITLE, TABLE OF CONTENT & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.7rem">What is Melanoma?</Heading>
            <TableOfContents sections={sections} />
            <Text mt="0.5rem">
                Skin cancer, including melanoma, is one of the most common cancers worldwide. While melanoma accounts for a smaller percentage of skin cancer cases, it is significantly more dangerous due to its potential to spread to other parts of the body.<sup><a href='#ref-1'>1</a></sup> In this section, you'll learn what melanoma is, how is it different from other types of skin cancer, how does it look like and common treatement.
            </Text>
            <Image src={WhatIsMelanoma} alt="Ilustration image: a mangifying class hovering over a brow spot" mt="1rem" mb="1rem" />
            {/* -------I. WHAT IS SKIN CANCER? ------- */}
            <Box id="understanding">
                <Heading as="h2" pt="0.5rem">Understanding Melanoma</Heading>
                <Text pt="0.7rem" pb="0.7rem">Melanoma is the most dangerous type of skin cancer, resulting from damage to the DNA in melanocyte cells of the skin. These cells create melanin, which gives skin its color. When the DNA in these cells is damaged, it can cause mutations that lead to uncontrolled cell growth and the development of malignant tumors.<sup><a href='#ref-2'>2</a></sup></Text>
                <Image src={Melanocyte} alt="melanocyte illustration in skin cell" width="auto" height="40vh" margin="0 auto" />
                {/* ------ 3 COMMON TYPE OF SC-------- */}
                <Text mb="1rem">
                    In addition to melanoma, there are other common types of skin cancer, including basal cell carcinoma and squamous cell carcinoma. The comparison board below highlights the key differences and characteristics of these three types.
                </Text>

                <TableContainer
                    whiteSpace="normal"
                    wordWrap="break-word"
                    overflowX="auto"
                >
                    <Table size='sm'>
                        <TableCaption>Comparison between 3 common types of skin cancer</TableCaption>
                        <Thead bgColor="blue.200" height="3rem">
                            <Tr>
                                <Th>Basal Cell Carcinoma(BCC)<sup><a href='#ref-3'>3</a></sup> </Th>
                                <Th>Squamous Cell Carcinoma(SCC)<sup><a href='#ref-4'>4</a></sup> </Th>
                                <Th>Melanoma<sup><a href='#ref-2'>2</a></sup> </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Image
                                        src={BasalCell}
                                        alt='Small, reddish/brownish papule, often with telangiectatic blood vessels. May appear translucent, and when it is, described as "pearly" in color. May have a central depression with rolled borders.'
                                        width='fit-content'
                                    />
                                </Td>
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
            </Box>

            {/* --2.HOW DOES MELANOMA LOOKS LIKE-- */}
            <Box id="look">
                <Heading as="h2" pt="0.5rem">How does Melanoma look like?</Heading>
                <Text pt="0.7rem" pb="0.7rem">Melanoma can start as a new spot or change from an old mole. The main sign to watch for is a mole that looks different or changes over time.
                    Early signs of melanoma can be remembered using the ABCDE check list:<sup><a href='#ref-5'>5</a></sup></Text>
                <Image
                    src={ABCDEList}
                    alt="A poster of the ABCDE checklist to detect Melanoma. A stands for asymetrical (Does the mole or spot have an irregular shape with two parts that look very different?). B stands for border (Is the border irregular or jagged?). C stands for color (Is the color uneven?). D stands for diameter(Is the mole or spot larger than the size of a pea?). And lastly, E stands for Evolving (has the mole or spot changed during the past few weeks or months?). If you notice any of these signs, contact a healthcare provider immediately."
                    width="auto"
                    height="80vh"
                    marginLeft="auto"
                    marginRight="auto"
                />
            </Box>

            {/* -- 3.HOW CAN MELANOMA BE TREATED?-- */}
            <Box id="treatement">
                <Heading as="h2" pt="0.5rem">How can Melanoma be treated?</Heading>
                <Text pt="0.7rem" pb="0.7rem">Melanoma treatment includes various approaches, such as surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapy. Each treatment aims to manage melanoma in different stages and improve patient outcomes.<sup><a href='#ref-2'>2</a></sup></Text>
                <OrderedList>
                    <ListItem>Surgery: Primary treatment involves removing the tumor and surrounding tissue. Lymph node mapping and biopsies may be conducted to check for cancer spread. Post-surgery, adjuvant therapy (chemotherapy) may be used to prevent recurrence.</ListItem>
                    <ListItem>Chemotherapy: Uses drugs to kill or stop the growth of cancer cells, administered either systemically or regionally, depending on the cancer type and stage.</ListItem>
                    <ListItem>Radiation Therapy: Uses high-energy radiation to kill cancer cells, often used to relieve symptoms and improve quality of life.</ListItem>
                    <ListItem>Immunotherapy: Employs the immune system to fight cancer, including checkpoint inhibitors and interleukin-2 (IL-2) therapy, which enhance the immune response against cancer cells.</ListItem>
                    <ListItem>Targeted Therapy: Uses drugs to attack specific cancer cells, including BRAF and MEK inhibitors for advanced melanoma.</ListItem>
                </OrderedList>
            </Box>

            {/* Reference Section */}
            <Reference references={references} />

        </Container>
    );
}

export default Overview;