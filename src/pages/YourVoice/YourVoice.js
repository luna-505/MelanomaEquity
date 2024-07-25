import React, { useState } from "react";
import { Box, Container, Heading, Text, Button, IconButton } from "@chakra-ui/react";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import { ArrowBackIcon } from '@chakra-ui/icons';
import FeedbackForm from './FeedbackForm'; // Adjust the import path as needed
import ImageSubmissionForm from './ImageSubmissionForm'; // Adjust the import path as needed

function YourVoice() {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch(selectedForm) {
      case 'feedback':
        return <FeedbackForm />;
      case 'imageSubmission':
        return <ImageSubmissionForm />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="4xl" as="main" lineHeight="2">
      {/* ----- PAGE'S BREADCRUMBS----- */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' }
        ]} 
        currentPage="Your Voice!" 
      />
      {/* ---PAGE'S TITLE & OVERVIEW  */}
      <Heading textAlign="center" p="0.7rem">Your Voice!</Heading>
      <Text mt="0.5rem">
        At Melanoma Equity, we believe that every voice matters and that sharing experiences and insights can make a significant impact in the fight against skin cancer. This space is designed to gather your feedback about our website and to collect images or stories related to skin cancer. Your contributions will help us improve our resources and build a diverse and comprehensive database to better understand and combat skin cancer.     
      </Text>

      {/* CHOOSING FORM BUTTON */}
      <Box  
        width="90%" 
        p="3rem"
        bgColor="blue.200"
        ml="auto"
        mr="auto"
        mt="2rem"
        mb="2rem"
        borderRadius="50"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        {!selectedForm && (
          <Heading as="h2" mb="1rem">What would you like to contribute?</Heading>
        )}
        {selectedForm ? (
          <>
            <IconButton 
              icon={<ArrowBackIcon />} 
              onClick={() => setSelectedForm(null)} 
              aria-label="Back"
            />
            {renderForm()}
          </>
        ) : (
          <>
            <Button onClick={() => setSelectedForm('feedback')} mb="1rem">Feedback</Button>
            <Button onClick={() => setSelectedForm('imageSubmission')}>Image Submission</Button>
          </>
        )}
      </Box>
    </Container>
  );
}

export default YourVoice;
