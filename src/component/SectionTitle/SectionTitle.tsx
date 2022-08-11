import { Box, Divider, Space, Title } from "@mantine/core";
import React, { FC } from "react";

/** @package */
export const SectionTitle: FC<{ title: string }> = (props) => {
  return (
    <Box>
      <Space h="md" />
      <Title>{props.title}</Title>
      <Space h="md" />
      <Divider />
      <Space h="md" />
    </Box>
  );
};
