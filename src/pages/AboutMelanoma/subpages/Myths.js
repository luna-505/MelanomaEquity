import React from "react";
// Import Chakra UI components
import { Container, Heading, Text, Divider, ListItem, OrderedList } from "@chakra-ui/react";
import { Image, Box  } from "@chakra-ui/react";
// Import UI components
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import Section from "../../../components/UI/Section";
import TableOfContents from "../../../components/UI/TOC";
import Reference from "../../../components/UI/References";
// import images 
import FactsMyths from '../../../assets/images/FactsMyths.png'

// Content: this page is myths s facts about melanoma 

const sections = [
    { id: 'myth1', title: 'Fair-skinned myth' },
    { id: 'myth2', title: 'Only sun-exposed area myth' }, 
    { id: 'myth3', title: 'Tan myth' }, 
    { id: 'myth4', title: 'Age myth' }
];

// references list
const references = [
    // 1
    "National Cancer Institute. (2016, April 19). Anyone Can Get Skin Cancer.",
    // 2
    "Brady J, Kashlan R, Ruterbusch J, Farshchian M, Moossavi M. (2021). Racial Disparities in Patients with Melanoma: A Multivariate Survival Analysis. Clin Cosmet Investig Dermatol., 14, 547-550. doi: 10.2147/CCID.S311694. PMID: 34079319; PMCID: PMC8163579.",
    // 3
    "MacNeil, M. (2020, September 27). Asian Americans and Pacific Islanders have poorer melanoma outcomes than white patients. UC Berkeley Public Health.",
    // 4
    "Perez MI. (2019). Skin Cancer in Hispanics in the United States. J Drugs Dermatol., 18(3), s117-120. PMID: 30909356.",
    // 5
    "Korta DZ, Saggar V, Wu TP, Sanchez M. (2014). Racial differences in skin cancer awareness and surveillance practices at a public hospital dermatology clinic. J Am Acad Dermatol., 70(2), 312-7. doi: 10.1016/j.jaad.2013.10.030. Epub 2013 Dec 9. PMID: 24332312.",
    // 6
    "Wix SN, Brown AB, Heberton M, Adamson AS, Gill JG. (2024). Clinical Features and Outcomes of Black Patients With Melanoma. JAMA Dermatol., 160(3), 328–333. doi:10.1001/jamadermatol.2023.5789.",
    // 7
    "FDA. (2023, May 16). The Risks of Tanning.",
    // 8
    "Reed KB, Brewer JD, Lohse CM, Bringe KE, Pruitt CN, Gibson LE. (2012). Increasing incidence of melanoma among young adults: an epidemiological study in Olmsted County, Minnesota. Mayo Clin Proc., 87(4), 328-34. doi: 10.1016/j.mayocp.2012.01.010. PMID: 22469345; PMCID: PMC3538462."
];

function Myths() {
    return(
        <Container maxWidth="4xl" as="main" lineHeight='2'>
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="Facts VS Myths about Melanoma"
            />
            {/* ---------TITLE, TABLE OF CONTENT & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.7rem">Myths VS Fact about Melanoma
            </Heading>
            <TableOfContents sections={sections} />
            <Text mt="0.5rem">
            This section aims to clear up common misconceptions and provide accurate information about melanoma. Understanding the truth about melanoma is crucial for prevention, early detection, and treatment. By separating myths from facts, we hope to empower you with knowledge that can help protect your skin and overall health.            
            </Text>
            <Image src={FactsMyths} alt="2 mouths both speaking at the same time, one is talking about a melanoma myth, one is talking about melanoma fact" mt="1rem" mb="1rem" />

            {/* I. MYTH 1: ONLY FAIR SKINNED PPLE GET MELANOMA */}
            <Box id="myth1">
                <Heading as="h2" pt="0.5rem">Myth 1: "Only fair-skinned people get melanoma."</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Fact: While melanoma is more common in fair-skinned individuals due to lower melanin levels, which offer less protection against UV radiation, melanoma can affect people of all skin tones.<sup><a href='#ref-1'>1</a></sup>.In fact, minorities face higher mortality risks compared to non-Hispanic white patients. Non-Hispanic black patients have the highest percentage of late-stage melanoma.<sup><a href='#ref-2'>2</a></sup>. Asian and Pacific Islander patients have a 27% higher mortality risk compared to non-Hispanic white patients.<sup><a href='#ref-3'>3</a></sup>. Rates of melanoma have also increased by more than 20% over the last two decades among Hispanic people.<sup><a href='#ref-4'>4</a></sup>
                </Text>
                <Text>
                This higher risk is partly due to a lack of informative resources and lack of diversity representation in dermatology, leading to delayed diagnoses in non-white patients.<sup><a href='#ref-5'>5</a></sup>.Therefore, increasing awareness and access to information is crucial for early detection and effective treatment.            
                </Text>
            </Box>

            {/* II. MYTH 2: MELANOMA ONLY OCCURS ON SUN-EXPOSED SKIN */}
            <Box id="myth2">
                <Heading as="h2" pt="0.5rem">Myth 2: "Melanoma only occurs on sun-exposed skin.</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Melanoma can develop on any part of the body, including areas not typically exposed to the sun, such as the soles of the feet or under the nails. In fact, melanoma in black people are often 75% classified as acral (on the palms/soles), with most being on the soles of the feet – an area not commonly exposed to the sun and less pigmented.<sup><a href='#ref-6'>6</a></sup>      
            </Text>
            </Box>

            {/* III: MYTH 4: TAN PROTECT FROM MELANOMA*/}
            <Box id="myth3">
                <Heading as="h2" pt="0.5rem">Myth 3: "A tan protects you from melanoma.</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Tanning, whether from the sun or tanning beds can increase your risk of melanoma. A tan is a sign that your skin is trying to protect itself from the sun's ultraviolet (UV) radiation. It is a sign of skin damage, not a sign of good health.<sup><a href='#ref-7'>7</a></sup>         
            </Text>
            </Box>

            {/* IV: MYTH 4: ONLY OLD PEOPLE GET MELANOMA */}
            <Box id="myth4">
                <Heading as="h2" pt="0.5rem">Myth 4: "You don’t need to worry about melanoma until you’re older."</Heading>
                <Text pt="0.7rem" pb="0.7rem">
                Melanoma can occur at any age, even in young adults and teenagers. Many study has found that melanoma is increasing among young people, especially young women.<sup><a href='#ref-8'>8</a></sup>         
                </Text>
            </Box>

        
            {/* Reference Section */}
            <Reference references={references} />


        </Container>
    );
}

export default Myths;
