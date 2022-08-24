import { Space, Stack, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import type { FC } from "react";
import { ContentType } from "src/pages/blog";

/** @package */
export const BlogContent: FC<ContentType> = (props) => {
  const { title, body, id, publishedAt } = props;

  // FIXME: ダークテーマのスタイルを当てる
  return (
    <Stack spacing={5}>
      <Link href={`/blog/${id}`} passHref>
        <Text size="xl" weight={500} sx={{ cursor: "pointer" }}>
          {title}
        </Text>
      </Link>
      <Text dangerouslySetInnerHTML={{ __html: body }} lineClamp={2} />
      <Text
        size="sm"
        weight={700}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.colors.gray[7] : "gray",
        })}
      >
        {format(parseISO(publishedAt as string), "yyyy.MM.dd")}
      </Text>
      <Space h="lg" />
    </Stack>
  );
};
