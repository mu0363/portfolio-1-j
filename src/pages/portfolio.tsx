import { Container } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { PortfolioSection } from "src/component/PortfolioSection";

const Portfolio: NextPage = () => {
  return (
    <Container>
      <PortfolioSection />
    </Container>
  );
};

export default Portfolio;
