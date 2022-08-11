import {
  Box,
  Burger,
  Header,
  MediaQuery,
  Text,
  ActionIcon,
  Group,
  useMantineColorScheme,
  Container,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  // FIX ME
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <Header height={70}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
          </MediaQuery>
          <Box
            sx={(_t) => ({
              width: "100%",
            })}
          >
            <Container size="md">
              <Group position="apart">
                <Text weight={700}>John Doe Profile</Text>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
                </ActionIcon>
              </Group>
            </Container>
          </Box>
        </div>
      </Header>
    </Box>
  );
};

export default Home;
