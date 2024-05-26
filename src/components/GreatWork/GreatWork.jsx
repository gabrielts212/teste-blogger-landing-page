import { Box, Flex, SimpleGrid, Heading, Text, Button, Stack, HStack } from "@chakra-ui/react";
import React from "react";

const GreatWork = () => {
  return (
    <Box position="relative" width="100%" bg="#66B2C2">
      
      <Flex
        flexDirection="column"
        p={{ base: 4, md: 10 }}
        alignItems="center"
        bg="#66B2C2"
        borderBottomLeftRadius="80px"
        borderBottomRightRadius="80px"
        zIndex={2}
        
      >
        <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="center" mb={6} color="white">
          The Great Work
        </Heading>
        <HStack spacing={4} mb={6}>
          <Button variant="outline" colorScheme="whiteAlpha" borderRadius="full">
            Influence & Followers
          </Button>
          <Button variant="solid" bg="white" color="#66B2C2" borderRadius="full">
            Wedding Party
          </Button>
          <Button variant="outline" colorScheme="whiteAlpha" borderRadius="full">
            Business Expansion
          </Button>
          <Button variant="outline" colorScheme="whiteAlpha" borderRadius="full">
            Publishing Business
          </Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" w="full" maxW="1200px" bg="white" p={6} borderRadius="xl" boxShadow="lg"mb="200">
          <Box>
            <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              <strong>Our experienced team</strong> will be present to ensure every aspect of the event runs smoothly from welcoming guests.
            </Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              <strong>Every precious moment</strong> will be captured by our professional photographers and videographers.
            </Text>
          </Box>
        </SimpleGrid>
        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" mt={6} color="white">
          Collaborating with our agency is an effective marketing strategy to achieve goals.
        </Text>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
          height="80px"
          borderTopLeftRadius="80px"
          borderTopRightRadius="80px"
          bg="white"
          zIndex={1}
        />
      </Flex>
    </Box>
  );
};

export default GreatWork;
