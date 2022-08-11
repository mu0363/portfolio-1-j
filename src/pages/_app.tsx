import { Box, ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header/";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
        }}
      >
        <Box>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
