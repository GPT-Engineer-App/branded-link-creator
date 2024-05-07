import React, { useState } from "react";
import { Container, VStack, Input, Button, Heading, useToast } from "@chakra-ui/react";

const Index = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleTranscribe = () => {
    if (!audioFile) {
      toast({
        title: "Error",
        description: "Please upload an audio file",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const simulatedTranscription = `Transcribed text of ${audioFile.name}`;
    setTranscription(simulatedTranscription);
    toast({
      title: "Transcription Complete",
      description: "The audio file has been transcribed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDownloadCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,Transcription\n"${transcription}"`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transcription.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Upload and Transcribe Audio</Heading>
        <Input type="file" accept="audio/*" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleTranscribe}>
          Transcribe Audio
        </Button>
        {transcription && (
          <Button mt={4} colorScheme="green" onClick={handleDownloadCSV}>
            Download Transcription as CSV
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
