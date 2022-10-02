import { Container, Grid, Space } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import type { BlogType, IndexProps, PortfolioType } from "src/types";
import { PrimaryButton } from "src/components/PrimaryButton";
import { githubClient } from "src/libs/github/githubClient";
import { GET_REPOSITORIES } from "src/libs/graphql/queries";
import { useTwitterQuery } from "src/libs/hooks/useTwitterQuery";
import { microCMSClient } from "src/libs/micro-cms/microCMSClient";
import { Blog } from "src/pages-components/blog";
import { GitHub, Hero, Twitter } from "src/pages-components/index";
import { Portfolio } from "src/pages-components/portfolio";
import { GetRepositoriesQuery } from "src/types/generated";

const IndexPage: NextPage<IndexProps> = (props) => {
  const { blogData, portfolioData, githubQueryData } = props;

  const { data } = useTwitterQuery();

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
          {data && (
            <Grid.Col sm={12} md={6}>
              <Twitter tweets={data} />
            </Grid.Col>
          )}
        </Grid>
      </Container>
      <Space h={75} />
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microCMSClient.getList<BlogType>({ endpoint: "blog", queries: { limit: 5 } });
  const portfolioData = await microCMSClient.getList<PortfolioType>({ endpoint: "portfolio", queries: { limit: 6 } });
  const githubQueryData = await githubClient.request<GetRepositoriesQuery>(GET_REPOSITORIES);

  return {
    props: { blogData, portfolioData, githubQueryData },
  };
};
