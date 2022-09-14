import { Container, Grid, Space } from "@mantine/core";
import axios from "axios";
import useSWR from "swr";
import type { GetStaticProps, NextPage } from "next";
import type { BlogType, IndexProps, PortfolioType, TwitterType } from "src/libs/types";
import { PrimaryButton } from "src/components/PrimaryButton";
import { client } from "src/libs/micro-cms/client";
import { Blog } from "src/pages-components/blog";
import { Hero, GitHub, Twitter } from "src/pages-components/index";
import { Portfolio } from "src/pages-components/portfolio";

const twitterFetcher = async (url: string): Promise<TwitterType[]> => {
  const res = await axios.get<TwitterType[]>(url);
  return res.data;
};

const IndexPage: NextPage<IndexProps> = (props) => {
  const { blogData, portfolioData } = props;
  // TODO: revalidateで空のtweetsをpropsで渡したのはなぜ?
  const twitterResult = useSWR<TwitterType[]>(`/api/tweets`, twitterFetcher);
  const tweets = twitterResult.data ?? [];

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
            <GitHub />
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Twitter tweets={tweets} />
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

  return {
    props: { blogData, portfolioData },
  };
};
