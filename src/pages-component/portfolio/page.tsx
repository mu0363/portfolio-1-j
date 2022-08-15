import { Button, Center, Container, Grid, Space } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { portfolioData } from "src/lib/const";
import { PortfolioContent } from "./PortfolioContent";

/** @package */
export const Portfolio: FC = () => {
  return (
    <Container>
      <SectionTitle title="Portfolio" />
      <Space h={20} />
      <Grid>
        {portfolioData.map((portfolio) => (
          <Grid.Col sm={3} md={4} key={portfolio.id}>
            <PortfolioContent {...portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h={20} />
      <Center>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          View All
        </Button>
      </Center>
      <Space h={60} />
    </Container>
  );
};
