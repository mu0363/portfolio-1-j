import { Container, Text } from "@mantine/core";
import { format } from "date-fns";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

import type { BlogType } from "src/lib/atom/blogState";
import { SectionTitle } from "src/component/SectionTitle";
import { client } from "src/lib/micro-cms/client";

type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<ContentType> = (props) => {
  const { title, body, publishedAt } = props;

  // FIXME: ダークテーマのスタイルを当てる
  return (
    <Container>
      <SectionTitle title={title} />
      <Text component="time"> {format(new Date(publishedAt), "yyyy.MM.dd")}</Text>
      <Text dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    fallback: false,
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<ContentType, { id: string }> = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const data = await client.getListDetail<BlogType>({ contentId: ctx.params.id, endpoint: "blog" });

  return {
    props: data,
  };
};

export default BlogId;
