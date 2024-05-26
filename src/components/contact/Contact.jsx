import { Flex, Heading, Text, Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logocontact2 from "../../assets/logocontact2.png";
import Logo2 from "../../assets/logo2.png";

const Contact = () => {
  return (
    <Flex position="relative" flexDirection="column" p={{ base: 4, md: 10 }} alignItems="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} alignItems="center" w="full" maxW="1200px">
        <Flex direction="column" width="100%" p={5} alignItems="center">
          <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="center">
            We are Prioritizes Mutual Development
          </Heading>
          <Flex mt={4} alignItems="center" justifyContent="center" textAlign="center">
            <Text>Let's build and succeed together with the services we provide</Text>
            <Box ml={4}>
              <Image src={Logo2} alt="Logo" width={18} height={18} />
            </Box>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" mt={{ base: 8, md: 0 }} p={5}>
          <Button
            colorScheme="customTeal"
            borderRadius="full"
            bg="#344455"
            _hover={{ bg: "#66B2C2" }}
            w={24}
            h={12}
            fontWeight="normal"
          >
            Contact Us
          </Button>
        </Flex>
        <Flex justify="center" align="center" p={5}>
          <Image src={Logocontact2} alt="Contact Logo" width={400} height={400} />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Contact;
