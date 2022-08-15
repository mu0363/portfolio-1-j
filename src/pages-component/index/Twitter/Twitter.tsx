import { Box, Button, Center } from "@mantine/core";
import { TwitterContent } from "./TwitterContent";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";
import { twitterData } from "src/lib/const";

/** @package */
export const Twitter: FC = () => {
  return (
    <Box>
      <SectionTitle title="Twitter" />
      {twitterData.map((twitter) => (
        <div key={twitter.id}>
          <TwitterContent {...twitter} />
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
