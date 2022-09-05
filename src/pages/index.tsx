import { Container, Grid, Space } from "@mantine/core";
import { TwitterApi } from "twitter-api-v2";
import type { GetStaticProps, NextPage } from "next";
import type { BlogType, IndexProps, PortfolioType } from "src/libs/types";
import { PrimaryButton } from "src/components/PrimaryButton";
import { client } from "src/libs/micro-cms/client";
import { Blog } from "src/pages-components/blog";
import { Hero, GitHub, Twitter } from "src/pages-components/index";
import { Portfolio } from "src/pages-components/portfolio";

const IndexPage: NextPage<IndexProps> = (props) => {
  const { blogData, portfolioData, twitterData } = props;

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
            <Twitter {...twitterData} />
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

  // Twitter
  // https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
  // https://github.com/PLhery/node-twitter-api-v2/blob/3d3dad74fc9e0870f1f30121286336ecce6a54eb/doc/v2.md#Users
  // https://developer.twitter.com/en/docs/twitter-api/pagination
  const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN || "");
  const readOnlyClient = twitterClient.readOnly;
  const { data } = await readOnlyClient.v2.userByUsername("typescript", {
    "user.fields": ["profile_image_url"],
  });
  const { tweets } = await twitterClient.v2.userTimeline(data.id, { "tweet.fields": ["created_at"], max_results: 5 });

  return {
    props: { blogData, portfolioData, twitterData: { profile: data, tweets } },
  };
};
