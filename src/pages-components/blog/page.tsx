import { Container, Space } from "@mantine/core";
import { useRecoilValue } from "recoil";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { blogState } from "src/libs/atoms";
import { BlogContent } from "src/pages-components/blog/BlogContent";

/** @package */
export const Blog: FC = () => {
  const blogData = useRecoilValue(blogState);

  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h={20} />
      {blogData.map((blog) => (
        <BlogContent key={blog.id} {...blog} />
      ))}
    </Container>
  );
};
