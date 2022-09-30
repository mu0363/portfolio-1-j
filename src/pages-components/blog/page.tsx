import { Space } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { PageContainer } from "src/layout/PageContainer";
import { BlogContent } from "src/pages-components/blog/BlogContent";
import { BlogType } from "src/types";

/** @package */
export const Blog: FC<{ blogArray: BlogType[] }> = ({ blogArray }) => {
  return (
    <PageContainer>
      <SectionTitle title="Blog" />
      <Space h={20} />
      {blogArray.map((blog) => (
        <BlogContent key={blog.id} {...blog} />
      ))}
    </PageContainer>
  );
};
