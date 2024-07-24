import React from 'react';
import { List, ListItem, Link, Heading } from '@chakra-ui/react';

const TableOfContents = ({ sections }) => {
  return (
    <nav>
      <Heading size="sm" mb="2">What you will find on this page:</Heading>
      <List spacing={2}>
        {sections.map((section, index) => (
          <ListItem key={index}>
            <Link href={`#${section.id}`} color="teal.500">
              {index + 1}. {section.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default TableOfContents;
