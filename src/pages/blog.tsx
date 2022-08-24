import { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { client } from "src/lib/micro-cms/client";
import { Blog } from "src/pages-component/blog";

export type BlogType = {
  title: string;
  body: string;
};
export type MicroCMSProps = MicroCMSListResponse<BlogType>;
export type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogPage: NextPage<MicroCMSProps> = (props) => {
  return <Blog contents={props.contents} />;
};

export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog" });

  return {
    props: data,
    revalidate: 120,
  };
};

export default BlogPage;
