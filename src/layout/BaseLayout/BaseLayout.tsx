import { AppShell, Footer, Group, Text } from "@mantine/core";
import { Header } from "./Header";
import type { FC, ReactNode } from "react";
import { LayoutErrorBoundary } from "src/layout/BaseLayout/LayoutErrorBoundary";

/** @package */
export const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <AppShell
        styles={{
          main: {
            padding: 0,
          },
        }}
        header={<Header />}
      >
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
        <Footer height={70} p="xl" sx={{ position: "sticky", top: "100%" }}>
          <Group position="center">
            <Text>© 2022 Shimabu IT University</Text>
          </Group>
        </Footer>
      </AppShell>
    </>
  );
};
