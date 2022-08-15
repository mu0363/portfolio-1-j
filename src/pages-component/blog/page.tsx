import { Button, Center, Container, Space } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { blogData } from "src/lib/const";
import { BlogContent } from "./BlogContent";

/** @package */
export const Blog: FC = () => {
  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h={20} />
      {blogData.map((blog) => (
        <div key={blog.id}>
          <BlogContent {...blog} />
        </div>
      ))}
      <Center>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          View All
        </Button>
      </Center>
      <Space h={60} />
    </Container>
  );
};
