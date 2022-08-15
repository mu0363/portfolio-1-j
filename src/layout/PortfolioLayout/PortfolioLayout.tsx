import { AppShell, Footer, Group, Space, Text } from "@mantine/core";
import type { FC } from "react";
import { Header } from "src/layout/PortfolioLayout/Header";

/** @package */
export const PortfolioLayout: FC = ({ children }) => {
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
      {children}
    </AppShell>
  );
};
