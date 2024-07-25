import React from "react";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import { Container, Heading, Text, Divider, Image, UnorderedList, Box } from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, OrderedList } from '@chakra-ui/react'
import DetectModel from './TeachableMachine.js';
import { Checkbox, CheckboxGroup, Stack, Center } from '@chakra-ui/react'
import ABCDEList2 from '../../assets/images/ABCDEList2.png'
import BodyCheckList from '../../assets/images/BodyCheckList.png'

function SelfExaminationGuide() {
  return (
    <Box
      bgColor="#BED9E3"
      p="2rem"
      borderRadius="50"
    >
      <Heading as="h2" pt="0.5rem" textAlign="center">
        Self-Examination and Photo Documentation Guide
      </Heading>

      <Text as="b">What you will need: </Text>
      <UnorderedList>
        <ListItem>A handheld mirror</ListItem>
        <ListItem>A full-length mirror</ListItem>
        <ListItem>A camera to take pictures of the mole</ListItem>
        <ListItem>A well-lit room</ListItem>
      </UnorderedList>

      <Text as="b">Steps: </Text>
      <OrderedList>
        <ListItem>Perform a Self-Examination: Scan your entire body from head to toe for any atypical moles or irregularities. Use the ABCD list to identify suspicious moles.
        </ListItem>
        <Image src={ABCDEList2} width="" />
        <ListItem>
          Documenting Your Moles:
          <UnorderedList>
            <ListItem>Ensure you’re in a well-lit room.</ListItem>
            <ListItem>Take close-up shots of any suspicious moles.</ListItem>
            <ListItem>Make sure the images are in clear focus.</ListItem>
            <ListItem>Keep these photos for future reference to monitor any changes over time.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>

      <Text as="b">Checklist: </Text>
      <Image src={BodyCheckList} />
      <Center mt={4}>
        <Stack spacing="1rem" mt="1rem" direction="horrizontal">
          <Checkbox colorScheme="red" defaultChecked size="lg">
            Face
          </Checkbox>
          <Checkbox colorScheme="red" size="lg">
            Scalp
          </Checkbox>
          <Checkbox colorScheme="red" size="lg">
            Torso
          </Checkbox>
          <Checkbox colorScheme="red" size="lg">
            Upperback
          </Checkbox>
        </Stack>
      </Center>

      <Center mt={4}>
        <Stack spacing="1rem" mt="1rem" direction="horrizontal">
          <Checkbox colorScheme="red" size="lg">
            Hands and arms
          </Checkbox>
          <Checkbox colorScheme="red" size="lg">
            Lowerback
          </Checkbox>
          <Checkbox colorScheme="red" size="lg">
            Legs and feet
          </Checkbox>
        </Stack>
      </Center>

    </Box>
  );
}

export default SelfExaminationGuide; 