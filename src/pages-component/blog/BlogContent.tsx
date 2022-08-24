import { Space, Stack, Text } from "@mantine/core";
import Link from "next/link";
// import { format, parseISO } from "date-fns";
import type { FC } from "react";
import { ContentType } from "src/pages/blog";

/** @package */
export const BlogContent: FC<ContentType> = (props) => {
  const { title, body, id } = props;

  return (
    <Stack spacing={5}>
      <Link href={`/blog/${id}`} passHref>
        <Text size="xl" weight={500} sx={{ cursor: "pointer" }}>
          {title}
        </Text>
      </Link>
      <Text sx={{ maxHeight: 55, overflow: "hidden" }}>{body}</Text>
      <Text
        size="sm"
        weight={700}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.colors.gray[7] : "gray",
        })}
      >
        {/* {format(parseISO(date), "yyyy.MM.dd")} */}
      </Text>
      <Space h="lg" />
    </Stack>
  );
};
