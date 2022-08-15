import { Container, Grid, Space } from "@mantine/core";
import { GitHub } from "./GitHub";
import { Hero } from "./Hero";
import { Twitter } from "./Twitter";
import type { FC } from "react";
import { Blog } from "src/pages-component/blog";
import { Portfolio } from "src/pages-component/portfolio";

/** @package */
export const Index: FC = () => {
  return (
    <main>
      <Hero />
      <Blog />
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
    </main>
  );
};
