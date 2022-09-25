// FIXME: non-null-assertionを解決
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Group, Progress, Space, Stack, Text, Box, Button, Center } from "@mantine/core";
import { IconStar, IconGitFork } from "@tabler/icons";
import type { FC } from "react";
import { GetRepositoriesQuery } from "generated";
import { SectionTitle } from "src/components/SectionTitle";

type Props = {
  githubQueryData: GetRepositoriesQuery;
};

/** @package */
export const GitHub: FC<Props> = ({ githubQueryData }) => {
  const githubData = githubQueryData.user?.repositories.nodes;
  return (
    <Box>
      <SectionTitle title="Github" />
      {githubData &&
        githubData.map((github) => {
          const totalSize = github?.languages?.edges?.reduce((sum, edge) => {
            return sum + edge!.size;
          }, 0);
          const languagesInfos = github?.languages?.edges?.map((edge) => {
            return {
              name: edge?.node.name,
              percent: Math.round((edge!.size / totalSize!) * 100),
              color: edge?.node.color,
            };
          });

          return (
            <div key={github?.id}>
              <Stack spacing={5}>
                <Text size="xl" weight={500}>
                  {github?.name}
                </Text>
                <Text>{github?.description}</Text>

                <Group
                  sx={(theme) => ({
                    color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
                  })}
                >
                  <Group>
                    <IconStar size={18} />
                    <Text size="sm" weight={700}>
                      {github?.stargazers.totalCount}
                    </Text>
                  </Group>
                  <Group>
                    <IconGitFork size={18} />
                    <Text size="sm" weight={700}>
                      {github?.forks.totalCount}
                    </Text>
                  </Group>
                </Group>
                <Progress
                  mt="md"
                  size="md"
                  radius="xl"
                  sections={languagesInfos?.map((languagesInfo) => ({
                    color: languagesInfo.color!,
                    value: languagesInfo.percent,
                  }))}
                />
                <Group>
                  {languagesInfos?.map((languagesInfo) => (
                    <Group spacing={5} key={languagesInfo.name}>
                      <Text size={8} color="blue">
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
