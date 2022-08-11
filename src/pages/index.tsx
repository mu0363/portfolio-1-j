import { Container, Grid, Space } from "@mantine/core";
import type { NextPage } from "next";
import { BlogSection } from "src/component/BlogSection";
import { GitHubSection } from "src/component/GitHubSection";
import { HeroSection } from "src/component/HeroSection";
import { PortfolioSection } from "src/component/PortfolioSection/PortfolioSection";
import { TwitterSection } from "src/component/TwitterSection";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <BlogSection />
        <PortfolioSection />
        <Grid>
          <Grid.Col sm={6} md={6}>
            <GitHubSection />
          </Grid.Col>
          <Grid.Col sm={6} md={6}>
            <TwitterSection />
          </Grid.Col>
        </Grid>
        <Space h={75} />
      </Container>
    </div>
  );
};

export default Home;
