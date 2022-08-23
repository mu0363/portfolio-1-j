import { Container, Footer, Grid, Group, Space, Text } from "@mantine/core";
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
      <Footer height={70} p="xl" sx={{ position: "absolute", bottom: "0px" }}>
        <Group position="center">
          <Text>© 2022 Shimabu IT University</Text>
        </Group>
      </Footer>
    </>
  );
};
