import { Box, Container, Grid, Group, MediaQuery, Stack, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import { TwitterIcon, FacebookIcon, RSSIcon } from "src/components/SVG";

/** @package */
export const Hero: FC = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.pink[6],
      })}
      style={{ alignItems: "center", display: "flex", height: 248 }}
    >
      <Container style={{ flex: 1 }}>
        <Grid>
          <Grid.Col sm={12} md={6}>
            <Stack spacing={0}>
              <HeroText defaultSize={35} mobileSize={30}>
                Shimabu IT University
              </HeroText>
              <HeroText defaultSize={16} mobileSize={14}>
                しまぶーのポートフォリオのためのページです
              </HeroText>
            </Stack>
          </Grid.Col>
          <MediaQuery largerThan="sm" styles={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
            <Grid.Col sm={12} md={6} p={0}>
              <Group
                sx={{
                  "@media (max-width: 768px)": {
                    marginLeft: "10px",
                    marginTop: "20px",
                  },
                }}
              >
                <TwitterIcon />
                <FacebookIcon />
                <RSSIcon />
              </Group>
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </Container>
    </Box>
  );
};

const HeroText: FC<{ children: ReactNode; defaultSize: number; mobileSize: number }> = ({
  children,
  defaultSize,
  mobileSize,
}) => {
  return (
    <MediaQuery largerThan="sm" styles={{ fontSize: defaultSize }}>
      <Text
        size={mobileSize}
        weight={700}
        color="white"
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.colors.gray[2] : "white",
        })}
      >
        {children}
      </Text>
    </MediaQuery>
  );
};
