import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

function Sunscreen() {
    return(
        <Container maxWidth="5xl" as="main">
            <Heading textAlign="center" p="2rem">How to wear sunscreen properly?</Heading>
            <Text>
                Eiusmod dolore sint ut qui. Lorem anim ad elit elit. Est laborum cupidatat veniam irure ut sit do aliqua deserunt quis.
                {/* Add more content as needed */}
            </Text>
        </Container>
    );
}

export default Sunscreen;
