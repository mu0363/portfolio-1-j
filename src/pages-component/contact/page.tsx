import { Button, Center, Container, Space, Stack, Textarea, TextInput } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";

/** @package */
export const Contact: FC = () => {
  return (
    <Container style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SectionTitle title="Contact" />
      <Space h={20} />
      <Stack>
        <TextInput placeholder="your@email.com" label="Email" required />
        <TextInput placeholder="Taro Yamada" label="Name" required />
        <Textarea placeholder="I want to order your goods." label="Your message" required />
      </Stack>
      <Space h={20} />
      <Center>
        <Button
          radius="xl"
          sx={(theme) => ({
            background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
          })}
        >
          Send message
        </Button>
      </Center>
    </Container>
  );
};
