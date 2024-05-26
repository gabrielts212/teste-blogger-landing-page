import { Box, Container, SimpleGrid, Stack, Text, Flex, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <Box bg="gray.100" color="gray.700" py={10}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4}>
          <Stack align="center" spacing={4}>
            <Box mb={4}>
              <Image src={Logo} alt="Logo" width={80} height={80} />
            </Box>
            <Flex justifyContent="center">
              <Box mx={1}>
                <FaFacebook size={24} />
              </Box>
              <Box mx={1}>
                <FaTwitter size={24} />
              </Box>
              <Box mx={1}>
                <FaInstagram size={24} />
              </Box>
            </Flex>
          </Stack>

          <Accordion allowToggle display={{ base: "block", md: "none" }}>
            <AccordionItem>
              <h2>
                <Flex justifyContent="center">
                  <AccordionButton width="70%">
                    <Box
                      flex="1"
                      display="flex"
                      textAlign="center"
                      alignItems="center"
                      justifyContent="center"
                      bg="#66B2C2"
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      <Text color="white" mr={2}>Influencers</Text>
                      <AccordionIcon color="white" />
                    </Box>
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel pb={4} textAlign="center" alignItems="center" justifyContent="center">
                <Flex mb={4} alignItems="center" justifyContent="center">
                  <Box mr={4} mb="4">
                    <Image src={Logo2} alt="Logo" width={7} height={7} />
                  </Box>
                  <Stack spacing={0}>
                    <Text>Content</Text>
                    <Text>About Influencers</Text>
                    <Text>Performance</Text>
                    <Text>Work</Text>
                  </Stack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Flex justifyContent="center">
                  <AccordionButton width="70%">
                    <Box
                      flex="1"
                      textAlign="center"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#66B2C2"
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      <Text color="white" mr={2}>Service</Text>
                      <AccordionIcon color="white" />
                    </Box>
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel pb={4} textAlign="center" alignItems="center" justifyContent="center">
                <Flex mb={4} alignItems="center" justifyContent="center">
                  <Box mr={4}>
                    <Image src={Logo2} alt="Logo" width={12} height={12} />
                  </Box>
                  <Stack spacing={0}>
                    <Text>Upgrade Rate</Text>
                    <Text>Copy Writing</Text>
                    <Text>Vlogging</Text>
                    <Text>Publishing</Text>
                  </Stack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Flex justifyContent="center">
                  <AccordionButton width="70%">
                    <Box
                      flex="1"
                      textAlign="center"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#66B2C2"
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      <Text color="white" mr={2}>Community</Text>
                      <AccordionIcon color="white" />
                    </Box>
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel pb={4} textAlign="center" alignItems="center" justifyContent="center">
                <Flex mb={4} alignItems="center" justifyContent="center">
                  <Box mr={4}>
                    <Image src={Logo2} alt="Logo" width={12} height={12} />
                  </Box>
                  <Stack spacing={0}>
                    <Text>Influencers Form</Text>
                    <Text>Sharing Session</Text>
                    <Text>Meet & Greet</Text>
                  </Stack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Flex justifyContent="center">
                  <AccordionButton width="70%">
                    <Box
                      flex="1"
                      textAlign="center"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#66B2C2"
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      <Text color="white" mr={2}>About</Text>
                      <AccordionIcon color="white" />
                    </Box>
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel pb={4} textAlign="center" alignItems="center" justifyContent="center">
                <Flex mb={4} alignItems="center" justifyContent="center">
                  <Box mr={4}>
                    <Image src={Logo2} alt="Logo" width={12} height={12} />
                  </Box>
                  <Stack spacing={0}>
                    <Text>Work On</Text>
                    <Text>Profile</Text>
                    <Text>Privacy</Text>
                  </Stack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Stack align="flex-start" spacing={2} display={{ base: "none", md: "block" }}>
            <Box
              bg="#66B2C2"
              borderRadius="full"
              px={3}
              py={1}
              mb={2}
            >
              <Text color="white" fontWeight="500" fontSize="lg">Influencers</Text>
            </Box>
            <Text>Content</Text>
            <Text>About Influencers</Text>
            <Text>Performance</Text>
            <Text>Work</Text>
          </Stack>

          <Stack align="flex-start" spacing={2} display={{ base: "none", md: "block" }}>
            <Box
              bg="#66B2C2"
              borderRadius="full"
              px={3}
              py={1}
              mb={2}
            >
              <Text color="white" fontWeight="500" fontSize="lg">Service</Text>
            </Box>
            <Text>Upgrade Rate</Text>
            <Text>Copy Writing</Text>
            <Text>Vlogging</Text>
            <Text>Publishing</Text>
          </Stack>

          <Stack align="flex-start" spacing={2} display={{ base: "none", md: "block" }}>
            <Box
              bg="#66B2C2"
              borderRadius="full"
              px={3}
              py={1}
              mb={2}
             
            >
              <Text color="white" fontWeight="500" fontSize="lg">Community</Text>
            </Box>
            <Text>Influencers Form</Text>
            <Text>Sharing Session</Text>
            <Text>Meet & Greet</Text>
          </Stack>

          <Stack align="flex-start" spacing={2} display={{ base: "none", md: "block" }}>
            <Box
              bg="#66B2C2"
              borderRadius="full"
              px={3}
              py={1}
              mb={2}
              
            >
              <Text color="white" fontWeight="500" fontSize="lg">About</Text>
            </Box>
            <Text>Work On</Text>
            <Text>Profile</Text>
            <Text>Privacy</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box textAlign="center" mt={10} >
        <Divider w="90%" borderWidth={2} borderColor="gray" mb={5} mx="auto" />
        <Text>Resource by Blogger LandingPage - ©2023</Text>
         
      </Box>
    </Box>
  );
};

export default Footer;
