import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Heading, useToast } from "@chakra-ui/react";

const Index = () => {
  const [subdirectory, setSubdirectory] = useState("");
  const [fullUrl, setFullUrl] = useState("");
  const toast = useToast();

  const handleCreateSubdirectory = () => {
    if (!subdirectory) {
      toast({
        title: "Error",
        description: "Subdirectory name can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const url = `https://www.yourdomain.com/${subdirectory}`;
    setFullUrl(url);
    toast({
      title: "Subdirectory Created",
      description: `Your new URL is: ${url}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setSubdirectory("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Create Your Branded Link</Heading>
        <Text>Enter a name for your subdirectory:</Text>
        <Input placeholder="Enter subdirectory name" value={subdirectory} onChange={(e) => setSubdirectory(e.target.value)} />
        <Button colorScheme="blue" onClick={handleCreateSubdirectory}>
          Create Subdirectory
        </Button>
        {fullUrl && (
          <Text mt={4}>
            Your branded link:{" "}
            <Text as="span" fontWeight="bold">
              {fullUrl}
            </Text>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
