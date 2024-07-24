import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import { Container, Heading, Text, Box, Input, Image, Button } from "@chakra-ui/react";
import {Reload} from '@emotion-icons/ionicons-sharp/Reload'
import { WarningTwoIcon } from '@chakra-ui/icons'


function DetectModel() {
    const [model, setModel] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [labelContainer, setLabelContainer] = useState(null);


    // Function to initialize the model and setup
    async function init() {
        // the path to the model's files 
        const URL = "./my_model/";
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // Load the model and metadata using fucntion tmImage.load() from Google TM
        // retrieve the number of classes: benign mole vs malignant mole
        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);

        // Create label container
        const container = document.getElementById("label-container");
        for (let i = 0; i < loadedModel.getTotalClasses(); i++) {
            container.appendChild(document.createElement("div"));
        }
        setLabelContainer(container);
    }

    // Function to handle file input and make predictions
    async function handleFileSelect(event) {
        // get the first file from the files input
        const file = event.target.files[0];
        // create a new image element
        const img = document.createElement('img');
        // create a temporary URL for the file 
        img.src = URL.createObjectURL(file);
        setImageURL(img.src); // Set the image URL to state

        // when the image is fully loaded, trigger this function
        img.onload = async () => {
            // check if the model is loaded
            if (model) {
                // make prediction
                const prediction = await model.predict(img);
                // Find the prediction with the highest probability
                let highestPrediction = prediction[0];
                for (let i = 1; i < prediction.length; i++) {
                    if (prediction[i].probability > highestPrediction.probability) {
                        highestPrediction = prediction[i];
                    }
                }

                // Map the highest prediction class name to a custom message
                let classPrediction, color;
                if (highestPrediction.className === "Benign Moles ") {
                    classPrediction = "Possible benign mole!";
                    color = "green"; 
                } else if (highestPrediction.className === "Malignant Moles") {
                    classPrediction = "Possible malignant mole!";
                    color ="red";
                }

                // Display the result
                labelContainer.childNodes[0].innerHTML = `<span style="font-weight:bold; font-style:italic; color:${color};">${classPrediction}</span>`;

            }
        };
        }

    // Initialize the model when the component mounts
    useEffect(() => {
        init();
    }, []);

    function handleTryAgain() {
        setImageURL(null);
        labelContainer.childNodes[0].innerHTML = ""; // Clear the prediction
    }


    return (
        <Box
            width="fit-content"
            bgColor="yellow.200"
            p="3rem"
            borderRadius="50"
            mb="2rem"
        >
            <Heading as="h1" mb={4}>Melanoma Detection Tool</Heading>
            <Text><WarningTwoIcon color="red.500"/> While this tool offers valuable support for early detection, it does not replace professional medical advice. Always consult a healthcare provider for any concerns about your skin health.</Text>
            <Text p="0.5rem">
            <WarningTwoIcon color="red.500"/>The detection tool is currently optimized for skin tones I to IV on the Fitzpatrick scale. Due to limited data, it is not accurate for assessing moles on darker skin tones (V and VI). However, everyone can benefit from the first two steps of this page: self-examination and capturing accurate photos of moles!
            </Text>
            <Text mb={4}>Upload an image of a mole to get an assessment.</Text>
            <Box display="flex" flexDirection="column" alignItems="center">
                {!imageURL && (
                    <>
                        <Input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            display="none"
                        />
                        <Button
                            as="label"
                            htmlFor="file-input"
                            background="teal"
                            color="white"
                            padding="8px 16px"
                            borderRadius="4px"
                            cursor="pointer"
                            mb={4}
                            _hover={{ background: "darkslategray" }}
                        >
                            Upload Image
                        </Button>
                    </>
                )}
                {imageURL && (
                    <>
                        <Image src={imageURL} alt="Uploaded preview" maxWidth="100%" height="15rem" />
                        <Button
                            onClick={handleTryAgain}
                            background="teal"
                            color="white"
                            padding="8px 16px"
                            borderRadius="4px"
                            cursor="pointer"
                            mt={4}
                            _hover={{ background: "darkslategray" }}
                        >
                            <Box as={Reload} size="24" color="white" mr={2} />
                            Try Again
                        </Button>
                    </>
                )}
            </Box>
            <Box id="label-container" mt={4} textAlign="center"></Box>
        </Box>
    );
}

export default DetectModel;
