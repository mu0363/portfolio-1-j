import { Box, Container, Grid, Group, MediaQuery, Stack, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import { TwitterIcon, FacebookIcon, RSSIcon } from "src/component/SVG";

/** @package */
export const Hero: FC = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.pink[6],
      })}
      style={{ height: 248, display: "flex", alignItems: "center" }}
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
          <MediaQuery largerThan="sm" styles={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <Grid.Col sm={12} md={6} p={0}>
              <Group
                sx={{
                  "@media (max-width: 768px)": {
                    marginTop: "20px",
                    marginLeft: "10px",
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

const HeroText: FC<{ defaultSize: number; mobileSize: number; children: ReactNode }> = ({
  defaultSize,
  mobileSize,
  children,
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
