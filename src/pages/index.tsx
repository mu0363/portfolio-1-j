import { Container, Grid, Space } from "@mantine/core";
import { GraphQLClient } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import type { BlogType, IndexProps, PortfolioType } from "src/libs/types";
import { GetRepositoriesQuery } from "generated";
import { PrimaryButton } from "src/components/PrimaryButton";
import { GET_REPOSITORIES } from "src/libs/graphql/queries";
import { useTwitterQuery } from "src/libs/hooks/useTwitterQuery";
import { client } from "src/libs/micro-cms/client";
import { Blog } from "src/pages-components/blog";
import { Hero, GitHub, Twitter } from "src/pages-components/index";
import { Portfolio } from "src/pages-components/portfolio";

const IndexPage: NextPage<IndexProps> = (props) => {
  const { blogData, portfolioData, githubQueryData } = props;
  const { data } = useTwitterQuery();

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Hero />
      <Blog blogArray={blogData.contents} />
      <PrimaryButton text="viewAll" href="/blog" />
      <Space h={60} />
      <Portfolio portfolioArray={portfolioData.contents} />
      <PrimaryButton text="viewAll" href="/portfolio" />
      <Space h={80} />
      <Container>
        <Grid>
          <Grid.Col sm={12} md={6}>
            <GitHub githubQueryData={githubQueryData} />
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Twitter tweets={data} />
          </Grid.Col>
        </Grid>
      </Container>
      <Space h={75} />
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  // microCMS
  const blogData = await client.getList<BlogType>({ endpoint: "blog", queries: { limit: 5 } });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio", queries: { limit: 6 } });
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const githubQueryData = await graphQLClient.request<GetRepositoriesQuery>(GET_REPOSITORIES);

  return {
    props: { blogData, portfolioData, githubQueryData },
  };
};
