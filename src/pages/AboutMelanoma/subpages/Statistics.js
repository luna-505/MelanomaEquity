import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import Breadcrumbs from "../../../components/UI/Breadcrumbs";

function Statistics() {
    return (
        <Container maxWidth="5xl" as="main">
            {/* ----- PAGE'S BREADCRUMBS----- */}
            <Breadcrumbs
                items={[
                    { label: 'All About Melanoma', path: '/about-melanoma' }
                ]}
                currentPage="Melanoma Statistics"
            />
            {/* ---------TITLE & OVERVIEW------------ */}
            <Heading as="h1" textAlign="center" p="0.5rem">Melanoma Statistics</Heading>
            <Text border="0.2rem" bgColor="yellow.100" p="0.5rem">
                Skin cancer, including melanoma, is one of the most common cancers worldwide. While melanoma accounts for a smaller percentage of skin cancer cases, it is significantly more dangerous due to its potential to spread to other parts of the body.
                In this section, you'll learn what melanoma is, common symptoms to watch out for, key risk factors, and practical prevention tips to help you reduce your risk.
            </Text>
        </Container>
    );
}

export default Statistics;
