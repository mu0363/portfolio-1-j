import { Container, Grid, Space } from "@mantine/core";
import { PortfolioContent } from "./PortfolioContent";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { PortfolioType } from "src/libs/types";

/** @package */
export const Portfolio: FC<{ portfolioArray: PortfolioType[] }> = ({ portfolioArray }) => {
  return (
    <Container>
      <SectionTitle title="Portfolio" />
      <Space h={20} />
      <Grid>
        {portfolioArray.map((portfolio) => (
          <Grid.Col sm={12} md={4} key={portfolio.id}>
            <PortfolioContent {...portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h={20} />
    </Container>
  );
};
