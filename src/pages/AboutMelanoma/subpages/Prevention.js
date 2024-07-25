import React from "react";
// import Chakra UI components
import { Container, Heading, Text, Image, Box  } from "@chakra-ui/react";
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import TableOfContents from "../../../components/UI/TOC";
import Reference from "../../../components/UI/References";
// import images
import PreventionPic from '../../../assets/images/Prevention.png'

// Content: this page is about how to prevent melanoma

// ID for each sections to link to the table of content
const sections = [
    { id: 'SunSafety', title: 'Practice Sun Safety' },
    { id: 'DoctorTalk', title: 'Talk with your doctor' },
    { id: 'SkinCheck', title: 'Regular Skin Checks' }
];

const references = [
    // 1
    "Centers for Disease Control and Prevention. (2024, July 1).Reducing Risk for Skin Cancer.",
    // 2
    "National Cancer Institute. (2016, April 19). Anyone Can Get Skin Cancer."
];

function Prevention() {
    return (
        <Container maxWidth="4xl" as="main" lineHeight='2'>
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="How to prevent Melanoma?"
            />
            {/* ---------TITLE, TABLE OF CONTENT & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.7rem">How to prevent Melanoma?
            </Heading>
            <TableOfContents sections={sections} />
            <Text mt="0.5rem">
            Preventing melanoma involves taking steps to protect your skin and minimize your risk factors. While not all risk factors can be controlled, adopting good sun safety practices and avoiding harmful behaviors can significantly reduce your chances of developing this skin cancer.   
            </Text>
            <Image src={PreventionPic} alt="Illustration for elements that could protect you from melanoma" mt="1rem" mb="1rem" />

            {/* I. WHAT ARE RISK FACTORS */}
            <Box id="SunSafety">
                <Heading as="h2" pt="0.5rem">Practice Sun Safety</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                UV rays from the sun and artificial sources, such as tanning beds, can damage skin cells and increase the risk of skin cancer. To protect yourself, make a habit of staying in the shade, particularly during peak UV hours between 10 a.m. and 4 p.m. during daylight saving time.<sup><a href='#ref-1'>1</a></sup>                
                </Text>
                <Text>
                If you need to be outside during these hours, wear clothing that covers your arms and legs, and choose a wide-brimmed hat to shield your face, head, ears, and neck. Sunglasses that block both UVA and UVB rays are also important. Additionally, applying broad-spectrum sunscreen with a sun protection factor (SPF) of 15 or higher can further protect your skin from harmful UV rays.<sup><a href='#ref-1'>1</a></sup>
                </Text>
            </Box>

            {/* I. WHAT ARE RISK FACTORS */}
            <Box id="DoctorTalk">
                <Heading as="h2" pt="0.5rem">Talk with your doctor</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Some medical conditions and medications can make your skin more sensitive or increase your risk of skin cancer. Conditions like HIV or certain immune-suppressing medications, as well as exposure to chemicals like arsenic, can also elevate your risk. Regular consultations with your doctor can help you understand and manage these risks effectively.<sup><a href='#ref-2'>2</a></sup>               
                </Text>
            </Box>


            {/* I. WHAT ARE RISK FACTORS */}
            <Box id="SkinCheck">
                <Heading as="h2" pt="0.5rem">Regular Skin Checks</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Avoiding risk factors and increasing protective behaviors can lower your risk of cancer, but it doesn’t guarantee that you won’t develop it. Therefore, it’s crucial to regularly check your skin for any changes or new growths. By routinely examining your skin, you can identify potential issues early and seek timely medical advice. This proactive approach can improve outcomes and enhance the chances of successful treatment if needed.
            </Text>
            </Box>
        
            {/* Reference Section */}
            <Reference references={references} />


        </Container>
    );
}

export default Prevention;
