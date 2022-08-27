import "src/styles/globals.css";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { BaseLayout } from "src/layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <RecoilRoot>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
          }}
        >
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
