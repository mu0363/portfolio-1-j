import { Box, Button, Center, Space } from "@mantine/core";
import React, { FC } from "react";
import { BlogContent } from "src/component/BlogSection/BlogContent";

import { SectionTitle } from "src/component/SectionTitle";
import { blogData } from "src/lib/const";

/** @package */
export const BlogSection: FC = () => {
  return (
    <Box>
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
    </Box>
  );
};
