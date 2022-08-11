import {
  Box,
  Burger,
  Header as Mantine,
  MediaQuery,
  Text,
  ActionIcon,
  Group,
  useMantineColorScheme,
  Container,
  Space,
  Drawer,
  Stack,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";
import Link from "next/link";
import { FC, useState } from "react";

/** @package */
export const Header: FC = () => {
  // FIX ME
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Drawer
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        padding="xl"
        size="xl"
        style={{ backgroundColor: "pink" }}
      >
        <Stack>
          <Link href="/about">
            <a>
              <Text size={30} weight={700}>
                About
              </Text>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Text size={30} weight={700}>
                Blog
              </Text>
            </a>
          </Link>
          <Link href="/portfolio">
            <a>
              <Text size={30} weight={700}>
                Portfolio
              </Text>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Text size={30} weight={700}>
                Contact
              </Text>
            </a>
          </Link>
        </Stack>
      </Drawer>
      <Mantine height={70} style={{ position: "fixed" }}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={isOpened} onClick={() => setIsOpened((o) => !o)} size="sm" ml={10} />
          </MediaQuery>
          <Box
            sx={(_t) => ({
              width: "100%",
            })}
          >
            <Container size="md" p={0}>
              <Group position="apart">
                <Link href="/">
                  <a>
                    <Text weight={700} ml={10}>
                      John Doe Profile
                    </Text>
                  </a>
                </Link>

                <Group>
                  <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
                    <Group>
                      <Link href="/about">
                        <a>
                          <Text weight={700}>About</Text>
                        </a>
                      </Link>
                      <Link href="/blog">
                        <a>
                          <Text weight={700}>Blog</Text>
                        </a>
                      </Link>
                      <Link href="/portfolio">
                        <a>
                          <Text weight={700}>Portfolio</Text>
                        </a>
                      </Link>
                      <Link href="/contact">
                        <a>
                          <Text weight={700}>Contact</Text>
                        </a>
                      </Link>
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
      </Mantine>
      <Space h={75} />
    </div>
  );
};
