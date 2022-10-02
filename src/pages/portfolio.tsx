import { Space } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import type { PortfolioType } from "src/types";
import { microCMSClient } from "src/libs/micro-cms/microCMSClient";
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
  const portfolioData = await microCMSClient.getList<PortfolioType>({ endpoint: "portfolio" });

  return {
    props: portfolioData,
  };
};
