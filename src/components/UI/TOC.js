import React from 'react';
import {HStack, Box, Link, StackDivider} from '@chakra-ui/react'

// Table of Contents component, show sections of the page in horizontal stack
const TableOfContents = ({ sections }) => {
  return (
    <nav>
      <HStack spacing={2} divider={<StackDivider borderColor='gray.200' />}>
        {sections.map((section, index) => (
          <Box key={index}>
            <Link href={`#${section.id}`} color="teal.500">
            {section.title}
            </Link>
          </Box>
        ))}
      </HStack>
    </nav>
  );
};

export default TableOfContents;
