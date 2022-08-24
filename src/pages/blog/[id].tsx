import { Container, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { BlogType } from "src/pages";
import type { ContentType } from "src/pages/blog";
import { SectionTitle } from "src/component/SectionTitle";
import { client } from "src/lib/micro-cms/client";

const BlogId: NextPage<ContentType> = (props) => {
  const { title, body, publishedAt } = props;

  // FIXME: ダークテーマのスタイルを当てる
  return (
    <Container>
      <SectionTitle title={title} />
      <Text component="time"> {format(parseISO(publishedAt as string), "yyyy.MM.dd")}</Text>
      <Text dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
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

export const getStaticProps: GetStaticProps<ContentType, { id: string }> = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const data = await client.getListDetail<BlogType>({ endpoint: "blog", contentId: ctx.params.id });

  return {
    props: data,
  };
};

export default BlogId;
