import { Center, Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { FC } from "react";

type PrimaryButtonType = {
  href: "/" | "/about" | "/blog" | "/portfolio" | "/contact";
  text: string;
};

/** @package */
export const PrimaryButton: FC<PrimaryButtonType> = ({ href, text }) => {
  return (
    <Center>
      <NextLink href={href}>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          {text}
        </Button>
      </NextLink>
    </Center>
  );
};
