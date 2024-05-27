import { Flex, Box, Heading, Text, Button, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Circulocinza from "../../assets/circulocinza.png";

const Principalpage = () => {
  return (
    <Box position="relative" p={{ base: 4, md: 10 }} bg="white" overflow="hidden" >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" maxW="1200px" mx="auto" mb={40}>
        <Box position="relative" width="100%">
          <VStack align="flex-start" spacing={6} zIndex={1} position="relative" p={{ base: 4, md: 10 }} border="2px solid #CBD5E0" borderRadius="xl">
            <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="left">
              LET'S TURN YOUR VLOGGING PASSION
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.5">
              Join Us on Our Blog and Enjoy <Text as="span" color="teal.500">High-Quality Content</Text> that Inspires and Provides Solutions
            </Text>
            <Button colorScheme="teal" borderRadius="full" size="lg">
              JOIN BE PARTNER
            </Button>
          </VStack>
          <HStack spacing={8} pt={4} wrap="wrap" mt={6}>
            <VStack spacing={0} align="center">
              <Heading size="lg">35.2+</Heading>
              <Text>REVIEWS</Text>
            </VStack>
            <VStack spacing={0} align="center">
              <Heading size="lg">20K+</Heading>
              <Text>CUSTOMERS</Text>
            </VStack>
            <VStack spacing={0} align="center">
              <Heading size="lg">89%</Heading>
              <Text>AGENCY RATE</Text>
            </VStack>
            <VStack spacing={0} align="center">
              <Heading size="lg">2016</Heading>
              <Text>BEGIN ON</Text>
            </VStack>
          </HStack>
        </Box>
        <Box position="relative" width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box
            bg="#66B2C2"
            width={{ base: "200px", md: "300px" }}
            height={{ base: "200px", md: "300px" }}
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Image src={Circulocinza} alt="Circle Logo" width={100} height={100} />
            <VStack color="white" spacing={3} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
              <Text fontSize="md">TRUSTED</Text>
              <Text fontSize="md">ACTUAL</Text>
              <Text fontSize="md">PROFESSIONAL</Text>
              <Text fontSize="md">ACTUAL</Text>
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
