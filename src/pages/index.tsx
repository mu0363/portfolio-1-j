import type { GetStaticProps, NextPage } from "next";
import type { BlogType, MicroCMSProps, PortfolioType } from "src/libs/types";
import { useSetAllData } from "src/libs/hooks";
import { client } from "src/libs/micro-cms/client";
import { Index } from "src/pages-components/index";

const IndexPage: NextPage<MicroCMSProps> = (props) => {
  useSetAllData(props);

  return <Index />;
};

export default IndexPage;

export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const blogData = await client.getList<BlogType>({ endpoint: "blog" });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio" });

  return {
    props: { blogData, portfolioData },
  };
};
