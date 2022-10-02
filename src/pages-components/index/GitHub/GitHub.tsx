import { Space, Box, Button, Center } from "@mantine/core";
import type { FC } from "react";
import type { GetRepositoriesQuery } from "src/types/generated";
import { SectionTitle } from "src/components/SectionTitle";
import { GithubContent } from "src/pages-components/index/GitHub/GithubContent";

type Props = {
  githubQueryData: GetRepositoriesQuery;
};

/** @package */
export const GitHub: FC<Props> = ({ githubQueryData }) => {
  const repositoryNodes = githubQueryData.user?.pinnedItems.nodes;

  return (
    <Box>
      <SectionTitle title="Github" />
      <GithubContent repositoryNodes={repositoryNodes} />
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
