import { Group, Progress, Space, Stack, Text } from "@mantine/core";
import { IconStar, IconGitFork } from "@tabler/icons";
import type { FC } from "react";

type GitHubType = {
  id: number;
  title: string;
  fork: number;
  ratio: { Javascript: number; Other: number; Typescript: number };
  star: number;
  subtitle: string;
};

/** @package */
export const GitHubContent: FC<GitHubType> = (props) => {
  const { title, fork, ratio, star, subtitle } = props;
  return (
    <Stack spacing={5}>
      <Text size="xl" weight={500}>
        {title}
      </Text>
      <Text>{subtitle}</Text>

      <Group
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
        })}
      >
        <Group>
          <IconStar size={18} />
          <Text size="sm" weight={700}>
            {star}
          </Text>
        </Group>
        <Group>
          <IconGitFork size={18} />
          <Text size="sm" weight={700}>
            {fork}
          </Text>
        </Group>
      </Group>

      <Progress
        mt="md"
        size="md"
        radius="xl"
        sections={[
          { color: "blue", value: ratio.Typescript },
          { color: "yellow", value: ratio.Javascript },
          { color: "grey", value: ratio.Other },
        ]}
      />

      <Group>
        <Group spacing={5}>
          <Text size={8} color="blue">
            ●
          </Text>
          <Text size={12} weight={700}>
            Typescript
          </Text>
          <Text
            size={12}
            sx={(theme) => ({
              color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
            })}
          >{`${ratio.Typescript}%`}</Text>
        </Group>
        <Group spacing={5}>
          <Text size={8} color="yellow">
            ●
          </Text>
          <Text size={12} weight={700}>
            Javascript
          </Text>
          <Text
            size={12}
            sx={(theme) => ({
              color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
            })}
          >{`${ratio.Javascript}%`}</Text>
        </Group>
        <Group spacing={5}>
          <Text size={8} color="grey">
            ●
          </Text>
          <Text size={12} weight={700}>
            Other
          </Text>
          <Text
            size={12}
            sx={(theme) => ({
              color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
            })}
          >{`${ratio.Other}%`}</Text>
        </Group>
      </Group>
      <Space h="lg" />
    </Stack>
  );
};
