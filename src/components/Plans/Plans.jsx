import { Box, SimpleGrid, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Logocirculos from "../../assets/logoplans.png";
import Image from "next/image";

const PriceCard = ({ title, price, features, buttonText, buttonColor, isPopular }) => {
  return (
    <Box
      p={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.100", "gray.700")}
      borderRadius="xl"
      boxShadow="lg"
      width={{ base: "100%", md: "80%" }}
      maxW="320px"
      m="auto"
      textAlign="center"
      border={isPopular ? "2px solid" : "none"}
      borderColor={isPopular ? buttonColor : "transparent"}
      position="relative"
      zIndex={2}
    >
      <Heading as="h3" size="lg" mb={4}>{title}</Heading>
      <Box mb={4}>
        {features.map((feature, index) => (
          <Text key={index} mb={2}>{feature}</Text>
        ))}
      </Box>
      <Text fontWeight="bold" fontSize="4xl" mb={4}>${price}</Text>
      <Box position="absolute" bottom="-80px">
        <Button colorScheme={buttonColor} variant="solid">{buttonText}</Button>
      </Box>
    </Box>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "Basic",
      price: "56",
      features: ["Single Post Package", "Story Package", "Collaboration Package"],
      buttonText: "Get Now",
      buttonColor: "blue",
    },
    {
      title: "Standard",
      price: "120",
      features: ["6 Post Package", "Story Package", "Collaboration Package", "Free Second Week"],
      buttonText: "Get Now",
      buttonColor: "blue",
      isPopular: true,
    },
    {
      title: "Premium",
      price: "200",
      features: ["12 Post Package", "24 Story Package", "Collaboration Package", "Free Second Week"],
      buttonText: "Get Now",
      buttonColor: "blue",
    }
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={16}
      px={8}
      bg={useColorModeValue("white", "gray.900")}
      position="relative"
    >
      <Box
        position="absolute"
        top={{ base: "50%", md: "40%" }}
        transform="translate(-50%, -40%)"
        width={{ base: "90%", md: "80%" }}
        height={{ base: "50%", md: "60%" }}
        left="50%"
        bg="#66B2C2"
        borderRadius="3xl"
        zIndex={1}
      />
      <Heading as="h2" size="xl" mb={10} textAlign="center" zIndex={2}>
        Choose a Package According to Your Needs
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10} zIndex={2}>
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonColor={plan.buttonColor}
            isPopular={plan.isPopular}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Plans;
