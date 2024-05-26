import { Flex, Box, Heading, Text, Button, Stack, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import React from "react";

const Principalpage = () => {
  return (
    <Box position="relative" p={{ base: 4, md: 10 }} bg="white">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" maxW="1200px" mx="auto" mb="200">
        <VStack align="flex-start" spacing={6}>
          <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="left">
            LET'S TURN YOUR VLOGGING PASSION
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Join Us on Our Blog and Enjoy <Text as="span" color="teal.500">High-Quality Content</Text> that Inspires and Provides Solutions
          </Text>
          <Button colorScheme="teal" borderRadius="full" size="lg">
            JOIN BE PARTNER
          </Button>
          <HStack spacing={8} pt={4}>
            <VStack spacing={0}>
              <Heading size="lg">35.2+</Heading>
              <Text>REVIEWS</Text>
            </VStack>
            <VStack spacing={0}>
              <Heading size="lg">20K+</Heading>
              <Text>CUSTOMERS</Text>
            </VStack>
            <VStack spacing={0}>
              <Heading size="lg">89%</Heading>
              <Text>AGENCY RATE</Text>
            </VStack>
            <VStack spacing={0}>
              <Heading size="lg">2016</Heading>
              <Text>BEGIN ON</Text>
            </VStack>
          </HStack>
        </VStack>
        <Box position="relative">
          <Box
            bg="#66B2C2"
            width="300px"
            height="300px"
            borderRadius="50%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
          >
            <VStack color="white" spacing={3} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
              <Text>TRUSTED</Text>
              <Text>ACTUAL</Text>
              <Text>PROFESSIONAL</Text>
              <Text>ACTUAL</Text>
            </VStack>
          </Box>
        </Box>
      </SimpleGrid>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        height="80px"
        borderTopLeftRadius="80px"
        borderTopRightRadius="80px"
        bg="#66B2C2"
        zIndex={1}
      />
    </Box>
  );
};

export default Principalpage;
