import type { GetStaticProps, NextPage } from "next";
import type { BlogType, IndexProps, PortfolioType } from "src/types";
import { microCMSClient } from "src/libs/micro-cms/microCMSClient";
import { Blog } from "src/pages-components/blog";

const BlogPage: NextPage<Omit<IndexProps, "twitterData">> = (props) => {
  return <Blog blogArray={props.blogData.contents} />;
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Omit<IndexProps, "twitterData" | "githubQueryData">> = async () => {
  const blogData = await microCMSClient.getList<BlogType>({ endpoint: "blog" });
  const portfolioData = await microCMSClient.getList<PortfolioType>({ endpoint: "portfolio" });

  return {
    props: { blogData, portfolioData },
  };
};
