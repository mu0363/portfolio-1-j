import { Button, Center, Container, Grid, Space } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { GitHub } from "./GitHub";
import { Hero } from "./Hero";
import { Twitter } from "./Twitter";
import type { FC } from "react";
import { Blog } from "src/pages-component/blog";
import { Portfolio } from "src/pages-component/portfolio";

/** @package */
export const Index: FC = () => {
  return (
    <>
      <Hero />
      <Blog />
      <Center>
        <NextLink href="/blog">
          <Button
            radius="xl"
            sx={(theme) => ({
              background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
            })}
          >
            View All
          </Button>
        </NextLink>
      </Center>
      <Space h={60} />
      <Portfolio />
      <Container>
        <Grid>
          <Grid.Col sm={12} md={6}>
            <GitHub />
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Twitter />
          </Grid.Col>
        </Grid>
      </Container>
      <Space h={75} />
    </>
  );
};
