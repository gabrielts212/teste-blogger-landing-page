import React from 'react';
import { Box, Button, useBreakpointValue } from '@chakra-ui/react';
import Image from "next/image";
import Logo from "../../assets/logocontact.png";

const Contact = () => {
    return (
  
      <Box width="300px" height="200px" p={4}>
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
              <Box mb={4}bg="red">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </Box>
      </Box>
    );
  };
  
  export default Contact;