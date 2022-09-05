import { Avatar, Group, Space, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { FC } from "react";
import { TweetType, TwitterProfileType } from "src/libs/types/types";

type TweetContentType = {
  profile: TwitterProfileType;
  tweet: TweetType;
};

/** @package */
export const TwitterContent: FC<TweetContentType> = (props) => {
  const { profile, tweet } = props;
  return (
    <Stack spacing={5}>
      <Group>
        <Avatar src={profile.profile_image_url} radius="xl" alt="it's me" />
        <Stack spacing={0}>
          <Group>
            <Text size="md" weight={500}>
              {profile.name}
            </Text>
            <Text
              size="sm"
              weight={700}
              sx={(theme) => ({
                color: theme.colorScheme === "dark" ? theme.colors.dark[5] : "grey",
              })}
            >
              {`@${profile.name}・${format(parseISO(tweet.created_at), "MM月dd日")}`}
            </Text>
          </Group>
          {/** FIXME: タイトル入れる? */}
          <Text size="sm">{tweet.id}</Text>
        </Stack>
      </Group>
      <Space h={20} />
      <Text size="sm">{tweet.text}</Text>
      <Space h={40} />
    </Stack>
  );
};
