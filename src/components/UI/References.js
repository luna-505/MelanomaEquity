import React from 'react';
import { Box, Heading, List, ListItem, Text, Divider } from '@chakra-ui/react';

// Reference list component, include a sup and the reference
// <sup><a href='#ref-4'>4</a></sup>
const Reference = ({ references }) => {
  return (
    <Box as="section" mt="1rem" mb="2rem">
    <Divider mb="1rem"/>
      <Heading as="h2" size="md" mb="1rem">References</Heading>
      <List>
        {references.map((ref, index) => (
          <ListItem key={index}>
            <Text as="sup" id={`ref-${index + 1}`}>{index + 1}</Text>
            <Text as="span" ml="0.5rem">{ref}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reference;
