import { AppShell, Footer, Group, Space, Text } from "@mantine/core";
import { Header } from "./Header";
import type { FC } from "react";
import { LayoutErrorBoundary } from "src/layout/BaseLayout/LayoutErrorBoundary";

/** @package */
export const BaseLayout: FC = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          width: "100vw",
          height: "100vh",
          padding: 0,
        },
      }}
      footer={
        <>
          <Space h={70} />
          <Footer height={70} p="xl">
            <Group position="center">
              <Text>© 2022 Shimabu IT University</Text>
            </Group>
          </Footer>
        </>
      }
      header={<Header />}
    >
      <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
    </AppShell>
  );
};
