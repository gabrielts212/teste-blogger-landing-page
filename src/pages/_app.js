// pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/reset.css"; // Importando o arquivo global.css

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
