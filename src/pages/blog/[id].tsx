import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

import { client } from "src/lib/micro-cms/client";
import { BlogType } from "src/pages";

const BlogId: NextPage = () => {
  return (
    <div>
      <h1>test</h1>
      <time>test</time>
      <p>test</p>
      {/* <h1>{title}</h1>
      <time>{date}</time>
      <p>{body}</p> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };

  // FIXME: アサーション削除
  const data = await client.getListDetail<BlogType>({ endpoint: "blog", contentId: ctx.params.id as string });

  return {
    props: data,
  };
};

export default BlogId;
