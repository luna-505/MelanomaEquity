import React from 'react';
import { Container, Heading, Text, Box, Input, Textarea, Checkbox, Button, FormLabel, FormControl } from "@chakra-ui/react";

function ImageSubmissionForm() {
  return (
    <Container>
      <Heading>Image Submission Form</Heading>
      <form 
        method="post" 
        action="https://formspree.io/f/xpwaqlez" 
        // enctype="multipart/form-data"
      >
        {/* Introduction */}
        <Text mt={4}>
          Please use this form to submit images related to melanoma. Your contributions will help us improve our resources.
        </Text>
        
        {/* Contact Information */}
        <Box mt={4}>
          <FormControl>
            <FormLabel fontWeight="bold">Name (optional)</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontWeight="bold">Email Address (optional)</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
        </Box>

        {/* Image Upload */}
        <Box mt={4}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">Upload Images</FormLabel>
            <Input type="file" name="images" multiple />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel fontWeight="bold">Image Description</FormLabel>
            <Textarea name="description" resize="vertical" />
          </FormControl>
        </Box>

        {/* Consent and Permissions */}
        <Box mt={4}>
          <FormControl isRequired>
            <Checkbox name="rights">I confirm that I have the rights to share these images.</Checkbox>
          </FormControl>
          <FormControl mt={2} isRequired>
            <Checkbox name="consent">I consent to the use of these images for research and educational purposes.</Checkbox>
          </FormControl>
        </Box>

        {/* Privacy Notice */}
        <Text mt={4}>
          We respect your privacy. Your submitted images will be stored securely and used only for the purposes stated above.
        </Text>

        {/* Submit Button */}
        <Button mt={4} type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default ImageSubmissionForm;
