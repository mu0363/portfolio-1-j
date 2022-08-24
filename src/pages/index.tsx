import type { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { client } from "src/lib/micro-cms/client";
import { Index } from "src/pages-component/index";

export type BlogType = {
  title: string;
  body: string;
};

export type MicroCMSProps = MicroCMSListResponse<BlogType>;
export type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

const IndexPage: NextPage<MicroCMSProps> = (props) => {
  return <Index contents={props.contents} />;
};

export default IndexPage;

// FIXME: 5件のみ取得
export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog", queries: { limit: 3 } });

  return {
    props: data,
  };
};
