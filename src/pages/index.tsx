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
import { Index } from "src/pages-component/index";

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
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" ml={10} />
          </MediaQuery>
          <Box
            sx={(_t) => ({
              width: "100%",
            })}
          >
            <Container size="md" p={0}>
              <Group position="apart">
                <Text weight={700} ml={10}>
                  John Doe Profile
                </Text>
                <Group>
                  <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
                    <Group>
                      <Text weight={700}>About</Text>
                      <Text weight={700}>Blog</Text>
                      <Text weight={700}>Portfolio</Text>
                      <Text weight={700}>Contact</Text>
                    </Group>
                  </MediaQuery>
                  <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30} mr={10}>
                    {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
                  </ActionIcon>
                </Group>
              </Group>
            </Container>
          </Box>
        </div>
      </Header>
      <Index />
    </Box>
  );
};

export default Home;
