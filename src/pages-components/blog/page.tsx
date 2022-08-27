import { Container, Space } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { BlogType } from "src/libs/types";
import { BlogContent } from "src/pages-components/blog/BlogContent";

/** @package */
export const Blog: FC<{ blogArray: BlogType[] }> = ({ blogArray }) => {
  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h={20} />
      {blogArray.map((blog) => (
        <BlogContent key={blog.id} {...blog} />
      ))}
    </Container>
  );
};
