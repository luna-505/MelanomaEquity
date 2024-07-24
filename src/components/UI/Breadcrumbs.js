import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({ items, currentPage }) => {
  return (
    <Breadcrumb 
        spacing='0.1rem' 
        separator={<ChevronRightIcon color='gray.500' />}
        fontSize='sm'
        mt="1.5rem"
    >
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink as={NavLink} to={item.path} textDecoration="underline" _hover={{ color: "blue.300" }}
          >{item.label}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{currentPage}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
