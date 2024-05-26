import { Box, Flex, FormControl, FormLabel, Input, Button, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logocirculos from "../../assets/logocirculos.png";

const Form = () => {
 
  const formBg = useBreakpointValue({ base: "white", md: "gray.50" });
  const borderRadius = useBreakpointValue({ base: "none", md: "xl" });

  return (
    <Flex minHeight="100vh" width="full" align="center" justify="center" p={8}>
      <Flex
        width="full"
        maxW="1200px"
        flexDirection="column"
        bg={formBg}
        borderRadius={borderRadius}
        overflow="hidden"
        boxShadow="xl"
        p={6}
      >
        <Heading fontFamily="Montserrat" fontSize={{ base: "2xl", md: "48px" }} textAlign="center" mb={8}>
          Let’s Begin the Journey with Us
        </Heading>

        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={8}
          >
            <Box width="full" maxW="md">
              <FormControl id="email" mb={4}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button
                width="full"
                colorScheme="customTeal"
                borderRadius="full"
                bg="#66B2C2"
                _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
                h={12}
                fontWeight="bold"
                textTransform="uppercase"
              >
                Get Started
              </Button>
            </Box>
          </Flex>

          <Flex
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={8}
            position="relative"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={-1}
              width="100%"
              height="100%"
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="xl"
              backgroundImage={`url(${Logocirculos.src})`}
            />
            <Text color="black" fontWeight="bold" textAlign="center" mb={4} zIndex={1}>
              Make Your Choice, our partners are very experienced in their field and have the potential to increase your business
            </Text>
            <Box zIndex={1}>
              <Image src={Logocirculos} alt="Logo" width={500} height={120} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Form;
