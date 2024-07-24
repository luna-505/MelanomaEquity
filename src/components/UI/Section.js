import React from 'react';
import { Heading, Text, Highlight } from '@chakra-ui/react';

const Section = ({ titleH2, titleH3, text, highlights = [] }) => (
  <>
    {titleH2 && <Heading as="h2" pt="0.5rem">{titleH2}</Heading>}
    {titleH3 && <Heading as="h3" pt="0.5rem" fontSize="lg">{titleH3}</Heading>}
    <Text pt="0.7rem" pb="0.7rem">
      {highlights.length > 0 ? (
        <Highlight 
          query={highlights} 
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'rgba(173, 216, 230, 0.6)'}}
        >
          {text}
        </Highlight>
      ) : (
        text
      )}
    </Text>
  </>
);

export default Section;
