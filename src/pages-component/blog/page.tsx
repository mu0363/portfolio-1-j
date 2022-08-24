import { Container, Space } from "@mantine/core";
import { BlogContent } from "./BlogContent";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { ContentType } from "src/pages/blog";

/** @package */
export const Blog: FC<{ contents: ContentType[] }> = ({ contents }) => {
  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h={20} />
      {contents.map((blog) => (
        <div key={blog.id}>
          <BlogContent {...blog} />
        </div>
      ))}
    </Container>
  );
};
