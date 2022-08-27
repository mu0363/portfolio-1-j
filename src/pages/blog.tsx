import type { GetStaticProps, NextPage } from "next";
import type { BlogType, MicroCMSProps, PortfolioType } from "src/libs/types";
import { useSetAllData } from "src/libs/hooks";
import { client } from "src/libs/micro-cms/client";
import { Blog } from "src/pages-components/blog";

const BlogPage: NextPage<MicroCMSProps> = (props) => {
  useSetAllData(props);

  return <Blog />;
};

export default BlogPage;

export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const blogData = await client.getList<BlogType>({ endpoint: "blog" });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio" });

  return {
    props: { blogData, portfolioData },
  };
};
