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
  Drawer,
  Stack,
  Space,
  createStyles,
  CloseButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { getPath } from "src/lib/const";

const useStyles = createStyles((theme) => ({
  drawer: {
    background: theme.colorScheme === "dark" ? "black" : theme.colors.pink[6],
    color: "white",
  },
  closeButton: {
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

/** @package */
export const Header: FC = () => {
  // FIX ME
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, handlers] = useDisclosure(false);

  // SideNav のメニュークリックで Drawer を閉じる処理
  useEffect(() => {
    router.events.on("routeChangeStart", handlers.close);
    return () => {
      router.events.off("routeChangeStart", handlers.close);
    };
  }, [handlers, router.events]);

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={handlers.close}
        padding="xl"
        size="xl"
        withCloseButton={false}
        classNames={{
          drawer: classes.drawer,
          closeButton: classes.closeButton,
        }}
      >
        <CloseButton
          size="xl"
          radius="xl"
          variant="transparent"
          onClick={handlers.close}
          sx={{
            position: "relative",
            zIndex: 999,
            right: 12,
            color: "white",
            "&:not(:disabled):active": { transform: "none" },
          }}
        />
        <Space h={25} />
        <Stack>
          <HeaderLink href={getPath("ABOUT")} size={30} />
          <HeaderLink href={getPath("BLOG")} size={30} />
          <HeaderLink href={getPath("PORTFOLIO")} size={30} />
          <HeaderLink href={getPath("CONTACT")} size={30} />
        </Stack>
      </Drawer>
      <Mantine height={70}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={handlers.open} size="sm" ml={10} />
          </MediaQuery>
          <Box
            sx={(_t) => ({
              width: "100%",
            })}
          >
            <Container size="md" p={0}>
              <Group position="apart">
                <Link href="/" passHref>
                  <Text
                    weight={700}
                    ml={10}
                    sx={{
                      cursor: "pointer",
                      "@media (max-width: 768px)": {
                        margin: "auto",
                      },
                    }}
                  >
                    John Doe Profile
                  </Text>
                </Link>

                <Group>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Group>
                      <HeaderLink href={getPath("ABOUT")} />
                      <HeaderLink href={getPath("BLOG")} />
                      <HeaderLink href={getPath("PORTFOLIO")} />
                      <HeaderLink href={getPath("CONTACT")} />
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
      <Space h={70} />
    </div>
  );
};

type HeaderLinkProps = {
  href: string;
  size?: number;
};

export const HeaderLink: FC<HeaderLinkProps> = ({ href, size }) => {
  const linkName = `${href[1].toUpperCase()}${href.slice(2)}`;

  return (
    <Link href={href} passHref>
      <Text size={size} weight={700} style={{ cursor: "pointer" }}>
        {linkName}
      </Text>
    </Link>
  );
};
