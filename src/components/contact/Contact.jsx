import { Flex, Heading, Text, Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logocontact3 from "../../assets/logocontact3.png";
import Logo2 from "../../assets/logo2.png";

const Contact = () => {
  return (
    <Flex position="relative" flexDirection="column" alignItems="center" p={{ base: 4, md: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="40px" alignItems="center" w="full" maxW="80%">
        <Flex direction="column" width="100%" p={5} alignItems="flex-start">
          <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "4xl" }}>
            We are Prioritizes Mutual Development
          </Heading>
          <Flex mt={4} alignItems="center" justifyContent="flex-start" textAlign="left" maxW="70%">
            <Text fontSize={{ base: "sm", md: "md" }}>
              Let's build and succeed together with the services we provide
            </Text>
            <Box ml={4} maxW="100%">
              <Image src={Logo2} alt="Logo" width={18} height={18} />
            </Box>
          </Flex>
        </Flex>

        <Flex justify="center" align="center" position="relative" mt={{ base: 8, md: 0 }} p={5}>
          <Button
          mt="20"
            colorScheme="teal"
            borderRadius="full"
            bg="#66B2C2"
            _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
            w="auto"
            h="auto"
            px={6}
            py={2}
            fontWeight="normal"
            border="2px solid #2C5E72"
          >
            Contact Us
          </Button>
        </Flex>

        <Flex justify="center" align="center" p={5}>
          <Box boxSize={{ base: "150px", md: "200px", lg: "300px" }} maxW="100%">
            <Image 
              src={Logocontact3} 
              alt="Contact Logo" 
              width={300}
              height={300}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Contact;
