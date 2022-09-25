import { Avatar, Group, Space, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { FC } from "react";
import { TwitterType } from "src/libs/types/types";

/** @package */
export const TwitterContent: FC<TwitterType> = (props) => {
  const { profile_image_url, name, tweet, created_at } = props;
  // FIXME: レイアウト直したい、取得件数制限したい
  return (
    <Stack spacing={5}>
      <Group>
        <Avatar src={profile_image_url} radius="xl" alt="it's me" />
        <Stack spacing={0}>
          <Group>
            <Text size="md" weight={500}>
              {name}
            </Text>
            <Text
              size="sm"
              weight={700}
              sx={(theme) => ({
                color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
              })}
            >
              {`@${name}・${format(parseISO(created_at), "MM月dd日")}`}
            </Text>
          </Group>
          <Text size="sm">{tweet}</Text>
        </Stack>
      </Group>
      <Space h={40} />
    </Stack>
  );
};
