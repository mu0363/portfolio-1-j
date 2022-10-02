import { Space, Stack, Text, Group, Progress } from "@mantine/core";
import { IconGitFork, IconStar } from "@tabler/icons";
import type { FC } from "react";
import type { GetRepositoriesQuery } from "src/types/generated";

type Props = {
  repositoryNodes: Exclude<Exclude<GetRepositoriesQuery["user"], null>["pinnedItems"], null>["nodes"] | undefined;
};

/** @package */
export const GithubContent: FC<Props> = ({ repositoryNodes }) => {
  return (
    <>
      {repositoryNodes?.map((repository) => {
        type ExcludeEmptyObject<T> = T extends { id: string } ? T : never;
        type RepositoryType = ExcludeEmptyObject<typeof repository>;
        const assertedRepository = repository as Exclude<RepositoryType, null>;
        const { id, name, description, stargazerCount, forkCount, languages } = assertedRepository;

        const totalSize = languages?.edges?.reduce((sum, edge) => {
          return sum + (edge ? edge.size : 0);
        }, 0);
        const languagesInfos = languages?.edges?.map((edge) => {
          return {
            id: edge?.node.id,
            name: edge?.node.name,
            percent: totalSize ? Math.round(((edge ? edge.size : 0) / totalSize) * 100) : 0,
            color: edge?.node.color,
          };
        });

        return (
          <div key={id}>
            {assertedRepository && (
              <Stack spacing={5}>
                <Text size="xl" weight={500}>
                  {name}
                </Text>
                <Text>{description}</Text>

                <Group
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
                  })}
                >
                  <Group>
                    <IconStar size={18} />
                    <Text size="sm" weight={700}>
                      {stargazerCount}
                    </Text>
                  </Group>
                  <Group>
                    <IconGitFork size={18} />
                    <Text size="sm" weight={700}>
                      {forkCount}
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
                    <Group spacing={5} key={languagesInfo.id}>
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
    </>
  );
};
