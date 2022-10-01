import { Space, Box, Button, Center, Stack, Text, Group, Progress } from "@mantine/core";
import { IconGitFork, IconStar } from "@tabler/icons";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { GetRepositoriesQuery } from "src/types/generated";

type Props = {
  githubQueryData: GetRepositoriesQuery;
};

/** @package */
export const GitHub: FC<Props> = ({ githubQueryData }) => {
  let githubNodeData;
  if (githubQueryData.user?.pinnedItems.edges) {
    // FIXME: non-null-assertionを解決
    githubNodeData = githubQueryData.user.pinnedItems.edges.map((data) => data!.node);
  }

  return (
    <Box>
      <SectionTitle title="Github" />
      {githubNodeData &&
        githubNodeData.map((github, index) => {
          type ExcludeEmptyObject<T> = T extends { id: string } ? T : never;
          type GithubType = ExcludeEmptyObject<typeof github>;
          const assertedGithub = github as GithubType;

          const totalSize = assertedGithub.languages?.edges?.reduce((sum, edge) => {
            return sum + (edge ? edge.size : 0);
          }, 0);
          const languagesInfos = assertedGithub.languages?.edges?.map((edge) => {
            return {
              name: edge?.node.name,
              percent: totalSize ? Math.round(((edge ? edge.size : 0) / totalSize) * 100) : 0,
              color: edge?.node.color,
            };
          });

          return (
            <div key={index}>
              {assertedGithub && (
                <Stack spacing={5}>
                  <Text size="xl" weight={500}>
                    {assertedGithub.name}
                  </Text>
                  <Text>{assertedGithub.description}</Text>

                  <Group
                    sx={(theme) => ({
                      color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
                    })}
                  >
                    <Group>
                      <IconStar size={18} />
                      <Text size="sm" weight={700}>
                        {assertedGithub.stargazers.totalCount}
                      </Text>
                    </Group>
                    <Group>
                      <IconGitFork size={18} />
                      <Text size="sm" weight={700}>
                        {assertedGithub.forks.totalCount}
                      </Text>
                    </Group>
                  </Group>
                  <Progress
                    mt="md"
                    size="md"
                    radius="xl"
                    sections={languagesInfos?.map((languagesInfo) => ({
                      color: languagesInfo.color ? languagesInfo.color : "#FFF",
                      value: languagesInfo.percent,
                    }))}
                  />
                  <Group>
                    {languagesInfos?.map((languagesInfo) => (
                      <Group spacing={5} key={languagesInfo.name}>
                        <Text size={8} color={languagesInfo.color ? languagesInfo.color : "#FFF"}>
                          ●
                        </Text>
                        <Text size={12} weight={700}>
                          {languagesInfo.name}
                        </Text>
                        <Text
                          size={12}
                          sx={(theme) => ({
                            color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
                          })}
                        >{`${languagesInfo.percent}%`}</Text>
                      </Group>
                    ))}
                  </Group>
                  <Space h="lg" />
                </Stack>
              )}
            </div>
          );
        })}
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
