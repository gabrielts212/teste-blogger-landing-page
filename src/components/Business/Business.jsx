import { Flex, Box, SimpleGrid, Heading, Text, Button, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import BusinessImg from "../../assets/logocirculos.png";

const Business = () => {
  return (
    <Flex flexDirection="column" p={{ base: 4, md: 10 }} alignItems="center" bg="white">
      <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="center" mb={6}>
        Improve Your Business
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" mb={6}>
        Improve the Quality of your Business and Feel the Benefits with Us
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" w="full" maxW="1200px">
        <Flex justify="center" align="center">
          <Image src={BusinessImg} alt="Improve Business" width={400} height={400} />
        </Flex>
        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Stack
              p={5}
              boxShadow="lg"
              borderRadius="md"
              bg="white"
              alignItems="center"
              textAlign="center"
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading size="md" mb={4}>Achieve Goals</Heading>
              <Text>Setting goals is like creating a roadmap to our dreams. They give us direction and purpose.</Text>
            </Stack>
            <Stack
              p={5}
              boxShadow="lg"
              borderRadius="md"
              bg="gray.100"
              alignItems="center"
              textAlign="center"
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading size="md" mb={4}>Campaign Manage</Heading>
              <Text>Set clear and measurable objectives for your campaigns. Know what you want to achieve.</Text>
            </Stack>
            <Stack
              p={5}
              boxShadow="lg"
              borderRadius="md"
              bg="white"
              alignItems="center"
              textAlign="center"
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading size="md" mb={4}>Brand Development</Heading>
              <Text>We build a strong personal brand identity with consistent verbiage style, visual appearance, and values.</Text>
            </Stack>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Button mt={8} colorScheme="teal" borderRadius="full" size="lg">View More</Button>
    </Flex>
  );
};

export default Business;
