import React from "react";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import { Container, Heading, Text, Divider, Image, UnorderedList, Box } from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, OrderedList } from '@chakra-ui/react'
import DetectModel from './TeachableMachine.js';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function SelfExaminationGuide() {
    return (
        <Box 
            width="fit-content" 
            bgColor="blue.200" 
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
            <Checkbox colorScheme='red' defaultChecked>
                Face (Don’t forget your nose, lips, mouth, ears, and neck!)
            </Checkbox>
            <Checkbox colorScheme='red' defaultChecked>
                Scalp (Wet your hair and use a comb for a thorough check. Ask for help from a family member or hairdresser if needed.)
            </Checkbox>
            <Checkbox colorScheme='red' defaultChecked>
                Face (Don’t forget your nose, lips, mouth, ears, and neck!)
            </Checkbox>
            <Checkbox colorScheme='red' defaultChecked>
                Face (Don’t forget your nose, lips, mouth, ears, and neck!)
            </Checkbox>
        </Box>
    );
}

export default SelfExaminationGuide; 