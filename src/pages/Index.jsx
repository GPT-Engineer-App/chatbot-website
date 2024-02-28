import React, { useState } from "react";
import { Box, Container, VStack, Heading, Textarea, Button, Text, Image, useToast } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Empty message",
        description: "You can't send an empty message.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Mock sending the message and receiving a reply from an AI
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    const aiReply = {
      id: Date.now() + 1,
      text: "I'm an AI, how can I assist you today?",
      sender: "ai",
    };

    setMessages([...messages, userMessage, aiReply]);
    setInputValue("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading mb={2}>Welcome to My Personal AI Chat</Heading>
          <Text color="gray.500">Feel free to chat with the AI assistant below!</Text>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90fGVufDB8fHx8MTcwOTEzMjY4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Chatbot" mt={4} />
        </Box>

        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="base">
          {messages.map((message) => (
            <Box key={message.id} bg={message.sender === "user" ? "blue.100" : "green.100"} p={2} my={2} borderRadius="md">
              <Text fontSize="sm">{message.text}</Text>
            </Box>
          ))}
        </Box>

        <Box>
          <Textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message here..." mb={4} />
          <Button colorScheme="blue" rightIcon={<FaPaperPlane />} onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
