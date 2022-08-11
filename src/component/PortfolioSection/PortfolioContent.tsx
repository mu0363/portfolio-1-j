import { Space, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React, { FC } from "react";

type PortfolioType = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

/** @package */
export const PortfolioContent: FC<PortfolioType> = (props) => {
  const { image, title, description, date } = props;
  return (
    <>
      <Image src={image} alt={title} width={1280} height={720} layout="responsive" objectFit="cover" priority />
      <Text size="xl" weight={500}>
        {title}
      </Text>
      <Text sx={{ maxHeight: 55, overflow: "hidden" }}>{description}</Text>
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
    </>
  );
};
