import { Container } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { BlogSection } from "src/component/BlogSection";

const Blog: NextPage = () => {
  return (
    <Container>
      <BlogSection />
    </Container>
  );
};

export default Blog;
