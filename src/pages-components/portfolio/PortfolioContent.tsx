import { Space, Text } from "@mantine/core";
import { format } from "date-fns";
import Image from "next/image";
import type { FC } from "react";
import type { PortfolioType } from "src/types";

/** @package */
export const PortfolioContent: FC<PortfolioType> = (props) => {
  const { title, body, publishedAt, thumbnail } = props;
  return (
    <>
      <Image src={thumbnail.url} alt={title} width={1280} height={720} layout="responsive" objectFit="cover" priority />
      <Text size="xl" lineClamp={1} weight={500}>
        {title}
      </Text>
      <Text lineClamp={2} sx={{ maxHeight: 55, overflow: "hidden" }}>
        {body}
      </Text>
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
    </>
  );
};
