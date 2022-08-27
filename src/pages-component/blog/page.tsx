import { Container, Space } from "@mantine/core";
import { useRecoilValue } from "recoil";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { blogState } from "src/lib/atom";
import { BlogContent } from "src/pages-component/blog/BlogContent";

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
