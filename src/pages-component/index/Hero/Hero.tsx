import { Box, Container, Grid, Group, MediaQuery, Stack, Text } from "@mantine/core";
import type { FC } from "react";
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
          <Grid.Col sm={6} md={6}>
            <Stack spacing={0}>
              <MediaQuery largerThan="sm" styles={{ fontSize: 35 }}>
                <Text
                  size={30}
                  weight={700}
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.pink[6] : "white",
                  })}
                >
                  Shimabu IT University
                </Text>
              </MediaQuery>
              <MediaQuery largerThan="sm" styles={{ fontSize: 16 }}>
                <Text
                  size={14}
                  weight={700}
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.pink[6] : "white",
                  })}
                >
                  しまぶーのポートフォリオのためのページです
                </Text>
              </MediaQuery>
            </Stack>
          </Grid.Col>
          <MediaQuery largerThan="sm" styles={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <Grid.Col sm={6} md={6} p={0}>
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
