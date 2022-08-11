import { Box, Footer as MantineFooter, Space } from "@mantine/core";
import React, { FC } from "react";

/** @package */
export const Footer: FC = () => {
  return (
    <Box>
      <Space h={60} />

      <MantineFooter
        height={70}
        p="xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          top: "100%",
        }}
      >
        © 2022 Shimabu IT University
      </MantineFooter>
    </Box>
  );
};
