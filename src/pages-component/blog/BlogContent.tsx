import { Space, Stack, Text } from "@mantine/core";
import { format } from "date-fns";
import Link from "next/link";
import type { FC } from "react";
import { BlogType } from "src/lib/atom/blogState";

/** @package */
export const BlogContent: FC<BlogType> = (props) => {
  const { id, title, body, publishedAt } = props;

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
        {format(new Date(publishedAt), "yyyy.MM.dd")}
      </Text>
      <Space h="lg" />
    </Stack>
  );
};
