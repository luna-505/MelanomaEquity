import React from 'react';
import { Button, Heading, Container, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Error404() {
  return (
    <Container maxW="container.md" minH="70vh" centerContent justifyContent="center">
      <VStack spacing={4} textAlign="center">
        <Heading size="4xl" color="#FF914D">404</Heading>
        <Heading size="lg">Page Not Found</Heading>
        <Text color="gray.600">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <Button as={RouterLink} to="/" bg="blue.200" size="lg">
          Take me back!
        </Button>
      </VStack>
    </Container>
  );
}

export default Error404;