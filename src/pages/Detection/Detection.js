import React from "react";
// import Chakra UI components
import { Container, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
// import  UI components
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import TableOfContents from "../../components/UI/TOC";

function Detection() {
  const sections = [
    { id: 'self-examination', title: 'Self Examination Guide' },
    { id: 'detection-model', title: 'Using the Detection Model' }
  ];

  return (
    <Container maxWidth="4xl" as="main" lineHeight="2">
      {/* ----- PAGE'S BREADCRUMBS----- */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' }
      ]} 
        currentPage="Detection Tools" 
      />
      {/* PAGE'S TITLE & OVERVIEW */}
      <Heading as="h1" textAlign="center" p="0.7rem">Detection Tool</Heading>
      <Text mt="0.5rem">
        Early detection is crucial in combating melanoma. Regularly monitoring your skin and noting any changes can help identify issues that may require medical attention. This tool is designed to assist you in performing a self-examination and uploading images of any suspicious moles for analysis. Our machine learning model will provide an initial assessment to help you determine if a mole might be benign or malignant.
      </Text>

      <Flex gap={4} mt={4} justifyContent="center">
        <NavLink to="self-examination-guide">
          <Button >Self Examination Guide</Button>
        </NavLink>
        <NavLink to="detect-machine">
          <Button>Detect Model</Button>
        </NavLink>
      </Flex>

      <Box mt="2rem" mb="2rem">
        <Outlet />
      </Box>
    </Container>
  );
}

export default Detection;
