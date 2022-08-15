import { Space, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { FC } from "react";

type BlogType = {
  id: number;
  title: string;
  content: string;
  date: string;
};

/** @package */
export const BlogContent: FC<BlogType> = (props) => {
  const { title, content, date } = props;

  return (
    <Stack spacing={5}>
      <Text size="xl" weight={500}>
        {title}
      </Text>
      <Text sx={{ maxHeight: 55, overflow: "hidden" }}>{content}</Text>
      <Text
        size="sm"
        weight={700}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.colors.gray[7] : "gray",
        })}
      >
        {format(parseISO(date), "yyyy.MM.dd")}
      </Text>
      <Space h="lg" />
    </Stack>
  );
};
