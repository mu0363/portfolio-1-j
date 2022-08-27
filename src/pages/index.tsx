import { Container, Grid, Space } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import type { BlogType, MicroCMSProps, PortfolioType } from "src/libs/types";
import { PrimaryButton } from "src/components/PrimaryButton/PrimaryButton";
import { client } from "src/libs/micro-cms/client";
import { Blog } from "src/pages-components/blog";
import { Hero, GitHub, Twitter } from "src/pages-components/index";
import { Portfolio } from "src/pages-components/portfolio";

const IndexPage: NextPage<MicroCMSProps> = (props) => {
  return (
    <>
      <Hero />
      <Blog blogArray={props.blogData.contents} />
      <PrimaryButton text="viewAll" href="/blog" />
      <Space h={60} />
      <Portfolio portfolioArray={props.portfolioData.contents} />
      <PrimaryButton text="viewAll" href="/portfolio" />
      <Space h={80} />
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

export default IndexPage;

export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const blogData = await client.getList<BlogType>({ endpoint: "blog", queries: { limit: 5 } });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio", queries: { limit: 6 } });

  return {
    props: { blogData, portfolioData },
  };
};
