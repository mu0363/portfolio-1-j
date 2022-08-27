import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { blogState } from "src/lib/atom";
import { BlogType } from "src/lib/atom/blogState";
import { portfolioState, PortfolioType } from "src/lib/atom/portfolioState";
import { client } from "src/lib/micro-cms/client";
import { Index } from "src/pages-component/index";

export type MicroCMSProps = {
  blogData: MicroCMSListResponse<BlogType>;
  portfolioData: MicroCMSListResponse<PortfolioType>;
};

const IndexPage: NextPage<MicroCMSProps> = (props) => {
  const setBlogData = useSetRecoilState(blogState);
  const setPortfolioData = useSetRecoilState(portfolioState);

  useEffect(() => {
    setBlogData(props.blogData.contents);
    setPortfolioData(props.portfolioData.contents);
  }, [props.blogData.contents, props.portfolioData.contents, setBlogData, setPortfolioData]);

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
