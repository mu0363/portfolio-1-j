import "src/styles/globals.css";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { SWRDevTools } from "swr-devtools";
import type { AppProps } from "next/app";
import { BaseLayout } from "src/layout/BaseLayout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <SWRDevTools>
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
    </SWRDevTools>
  );
};

export default MyApp;
