import React from "react";
import { Container, Heading, Text, Box, FormControl, FormLabel, Input, Textarea, Button, Stack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

function FeedbackForm() {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);

    //     // Basic client-side validation
    //     const sanitizeInput = (input) => input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    //     const sanitizedData = {};
    //     for (const [key, value] of formData.entries()) {
    //         sanitizedData[key] = sanitizeInput(value);
    //     }

    //     // Handle form submission logic here
    //     console.log(sanitizedData);
    // };

    return (
        <Container maxW="5xl" mt="2rem">
            <Heading mb="1rem">Feedback Form</Heading>
            <Text mb="1rem">We value your feedback. Please let us know your thoughts or suggestions.</Text>
            <Box as="form" method="post" action="https://formspree.io/f/mrbzeldq" >
                <Stack spacing="1rem">
                    <FormControl id="name" isRequired>
                        <FormLabel fontWeight="bold">Your Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </FormControl>

                    <FormControl id="email">
                        <FormLabel fontWeight="bold">Your Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </FormControl>

                    <Text as="b">Feedback Categories, rate from 0-5</Text>
                    <FormControl id="ease-of-use" isRequired>
                        <FormLabel>Ease of Use</FormLabel>
                        <NumberInput
                            min={0}
                            max={5}
                            name="easeOfUse"
                        >
                            <NumberInputField placeholder="Rate from 0 to 5" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="content-quality" isRequired>
                        <FormLabel>Content Quality</FormLabel>
                        <NumberInput
                            min={0}
                            max={5}
                            name="contentQuality"
                        >
                            <NumberInputField placeholder="Rate from 0 to 5" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="design-and-layout" isRequired>
                        <FormLabel>Design and Layout</FormLabel>
                        <NumberInput
                            min={0}
                            max={5}
                            name="designAndLayout"
                        >
                            <NumberInputField placeholder="Rate from 0 to 5" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="navigation" isRequired>
                        <FormLabel>Navigation</FormLabel>
                        <NumberInput
                            min={0}
                            max={5}
                            name="navigation"
                        >
                            <NumberInputField placeholder="Rate from 0 to 5" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="feedback">
                        <FormLabel fontWeight="bold">Comments/Suggestions</FormLabel>
                        <Textarea
                            name="feedback"
                            placeholder="Enter your feedback"
                            height="10rem"
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit Feedback</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default FeedbackForm;
