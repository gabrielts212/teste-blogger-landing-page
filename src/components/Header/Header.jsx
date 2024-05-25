import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import CustomLink from "../link/Link";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <ChakraProvider>
      <Box bg="gray.100" px={4} py={2}>
        <Flex align="center">
          <CustomLink to="/">
            <Box pl={8}>
              <Image src={Logo} alt="Logo" boxSize="40px" />
            </Box>
          </CustomLink>

          <Spacer />

          {isMobile ? (
            <Button
              onClick={() => setShowMenu(!showMenu)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              colorScheme="customTeal"
              //   bg="#344455"
              //   _hover={{ bg: "#66B2C2" }}
              w={20}
              h={10}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                {showMenu ? (
                  <path d="M0 0h24v24H0z" fill="none" />
                ) : (
                  <path d="M0 0h24v24H0z" fill="none" />
                )}
                <path
                  fill="black"
                  d={
                    showMenu
                      ? "M20 12H4v-2h16v2zm0 5H4v-2h16v2zm0-10H4V5h16v2z"
                      : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  }
                />
              </svg>
            </Button>
          ) : (
            <Flex align="center">
              <CustomLink to="/">
                <Text
                  as="text"
                  mx={4}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  Home
                </Text>
              </CustomLink>

              <CustomLink to="/">
                <Link
                  as="text"
                  mx={4}
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  Service
                </Link>
              </CustomLink>

              <CustomLink to="/">
                <Link
                  as="text"
                  mx={4}
                  pr={20}
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  Partner
                </Link>
              </CustomLink>

              <CustomLink to="/" pr={8}>
                <Button
                  ml={4}
                  colorScheme="customTeal"
                  borderRadius="full"
                  bg="#344455"
                  _hover={{ bg: "#66B2C2" }}
                  w={24}
                  h={8}
                  fontWeight="normal"
                >
                  Contact Us
                </Button>
              </CustomLink>
            </Flex>
          )}
        </Flex>

        {isMobile && showMenu && (
          <Flex
            direction="column"
            // bg="gray.200"
            mt={2}
            p={2}
            borderRadius="md"
          >
            <CustomLink to="/">
              <Text
                as="text"
                my={2}
                fontWeight="bold"
                _hover={{ textDecoration: "none", color: "gray.600" }}
              >
                Home
              </Text>
            </CustomLink>

            <CustomLink to="/">
              <Link
                as="text"
                my={2}
                _hover={{ textDecoration: "none", color: "gray.600" }}
              >
                Service
              </Link>
            </CustomLink>

            <CustomLink to="/">
              <Link
                as="text"
                my={2}
                _hover={{ textDecoration: "none", color: "gray.600" }}
              >
                Partner
              </Link>
            </CustomLink>

            <Button
              mt={4}
              colorScheme="customTeal"
              borderRadius="full"
              bg="#344455"
              _hover={{ bg: "#66B2C2" }}
              w="100%"
              fontWeight="normal"
            >
              Contact Us
            </Button>
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default Header;
