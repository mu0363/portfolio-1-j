import { Box, Button, Center, Space } from "@mantine/core";
import React, { FC } from "react";
import { GitHubContent } from "src/component/GitHubSection/GitHubContent";
import { SectionTitle } from "src/component/SectionTitle";
import { githubData } from "src/lib/const";

/** @package */
export const GitHubSection: FC = () => {
  return (
    <Box>
      <SectionTitle title="Github" />
      {githubData.map((github) => (
        <div key={github.id}>
          <GitHubContent {...github} />
        </div>
      ))}
      <Space h={20} />
      <Center>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          View on GitHub
        </Button>
      </Center>
    </Box>
  );
};
