import { Container, Text } from "@mantine/core";
import { format } from "date-fns";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { BlogType, ContentType } from "src/types";
import { SectionTitle } from "src/components/SectionTitle";
import { microCMSClient } from "src/libs/micro-cms/microCMSClient";

const BlogId: NextPage<ContentType> = (props) => {
  const { title, body, publishedAt } = props;

  return (
    <Container>
      <SectionTitle title={title} />
      <Text component="time"> {format(new Date(publishedAt), "yyyy.MM.dd")}</Text>
      <Text>{body}</Text>
      {/*FIXME: ダークテーマのスタイルを当てる */}
      {/* <Text dangerouslySetInnerHTML={{ __html: body }} /> */}
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await microCMSClient.getList<BlogType>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    fallback: "blocking",
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<ContentType, { id: string }> = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const data = await microCMSClient.getListDetail<BlogType>({ contentId: ctx.params.id, endpoint: "blog" });

  return {
    props: data,
  };
};

export default BlogId;
