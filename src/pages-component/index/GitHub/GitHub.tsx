import { Box, Button, Center, Space } from "@mantine/core";
import { GitHubContent } from "./GitHubContent";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { githubData } from "src/lib/const";

/** @package */
export const GitHub: FC = () => {
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
