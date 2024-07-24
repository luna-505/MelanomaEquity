import React from "react";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import { Container, Heading, Text, Box } from "@chakra-ui/react";
import DetectModel from './TeachableMachine';
import SelfExaminationGuide from "./SelfExaminationGuide";
import TableOfContents from "../../components/UI/TOC";

function Detection() {
  const sections = [
    { id: 'self-examination', title: 'Self Examination Guide' },
    { id: 'detection-model', title: 'Using the Detection Model' }
  ];

  return (
    <Container maxWidth="5xl" as="main">
      {/* ----- PAGE'S BREADCRUMBS----- */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' }
        ]} 
        currentPage="Detection Tool" 
      />      
      {/* PAGE'S TITLE & OVERVIEW */}
      <Heading textAlign="center" p="2rem">Detection Tool</Heading>
      <Text border="0.2rem" bgColor="yellow.100" p="0.5rem">
        Early detection is crucial in combating melanoma. Regularly monitoring your skin and noting any changes can help identify issues that may require medical attention. This tool is designed to assist you in performing a self-examination and uploading images of any suspicious moles for analysis. Our machine learning model will provide an initial assessment to help you determine if a mole might be benign or malignant.
      </Text>
      <Box p="4">
        <TableOfContents sections={sections} />
      </Box>

      <Box id="self-examination" mt="4">
        <SelfExaminationGuide />
      </Box>

      <Box id="detection-model" mt="4">
        <DetectModel />
      </Box>
    </Container>
  );
}

export default Detection;
