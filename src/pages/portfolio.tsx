import { Space } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import type { PortfolioType } from "src/types";
import { client } from "src/libs/micro-cms/client";
import { Portfolio } from "src/pages-components/portfolio";

const PortfolioPage: NextPage<MicroCMSListResponse<PortfolioType>> = (props) => {
  return (
    <>
      <Portfolio portfolioArray={props.contents} />
      <Space h={60} />
    </>
  );
};

export default PortfolioPage;

export const getStaticProps: GetStaticProps<MicroCMSListResponse<PortfolioType>> = async () => {
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio" });

  return {
    props: portfolioData,
  };
};
