import { Box, Container, Grid, Group, MediaQuery, Stack, Text } from "@mantine/core";
import { FC } from "react";
import { TwitterIcon, FacebookIcon, RSSIcon } from "src/component/SVG";

/** @package */
export const HeroSection: FC = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.pink[6],
      })}
      style={{ width: "100%", height: 248 }}
    >
      <Container>
        <Grid justify="space-between">
          <Grid.Col sm={6} md={6}>
            <Stack spacing={0}>
              <MediaQuery
                query="(max-width: 1200px) and (min-width: 800px)"
                styles={{ fontSize: 35, "&:hover": { backgroundColor: "silver" } }}
              >
                <Text
                  size={30}
                  weight={700}
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.pink[5] : "white",
                  })}
                >
                  Shimabu IT University
                </Text>
              </MediaQuery>
              <MediaQuery
                query="(max-width: 1200px) and (min-width: 800px)"
                styles={{ fontSize: 16, "&:hover": { backgroundColor: "silver" } }}
              >
                <Text
                  size={14}
                  weight={700}
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.pink[5] : "white",
                  })}
                >
                  しまぶーのポートフォリオのためのページです
                </Text>
              </MediaQuery>
            </Stack>
          </Grid.Col>
          <Grid.Col sm={6} md={6}>
            <Group style={{ textAlign: "center" }}>
              <TwitterIcon />
              <FacebookIcon />
              <RSSIcon />
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
