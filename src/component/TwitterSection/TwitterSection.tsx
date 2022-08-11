import { Box, Button, Center } from "@mantine/core";
import React, { FC } from "react";

import { SectionTitle } from "src/component/SectionTitle";
import { TwitterContent } from "src/component/TwitterSection/TwitterContent";
import { twitterData } from "src/lib/const";

/** @package */
export const TwitterSection: FC = () => {
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
