import { Box, Button, Center } from "@mantine/core";
import { TwitterContent } from "./TwitterContent";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { TwitterType } from "src/types";

/** @package */
export const Twitter: FC<{ tweets: TwitterType[] }> = (props) => {
  const { tweets } = props;
  return (
    <Box>
      <SectionTitle title="Twitter" />
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <TwitterContent {...tweet} />
        </div>
      ))}
      <Center>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          View All
        </Button>
      </Center>
    </Box>
  );
};
