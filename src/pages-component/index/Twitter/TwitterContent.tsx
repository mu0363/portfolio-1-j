import { Avatar, Group, Space, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { FC } from "react";

type TwitterType = {
  id: number;
  accountName: string;
  accountId: string;
  avatar: string;
  title: string;
  content: string;
  date: string;
};

/** @package */
export const TwitterContent: FC<TwitterType> = (props) => {
  const { accountName, accountId, avatar, title, content, date } = props;
  return (
    <Stack spacing={5}>
      <Group>
        <Avatar src={avatar} radius="xl" alt="it's me" />
        <Stack spacing={0}>
          <Group>
            <Text size="md" weight={500}>
              {accountName}
            </Text>
            <Text
              size="sm"
              weight={700}
              sx={(theme) => ({
                color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
              })}
            >
              {`${accountId}・${format(parseISO(date), "MM月dd日")}`}
            </Text>
          </Group>
          <Text size="sm">{title}</Text>
        </Stack>
      </Group>
      <Space h={20} />
      <Text size="sm">{content}</Text>
      <Space h={40} />
    </Stack>
  );
};
