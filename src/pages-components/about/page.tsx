import { Container, Space, Text } from "@mantine/core";
import type { FC } from "react";
import { SectionTitle } from "src/components/SectionTitle";

/** @package */
export const About: FC = () => {
  return (
    <Container style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SectionTitle title="About" />
      <Space h={20} />
      <Text size="xl" weight={700}>
        LightSound Shimabu
      </Text>
      <Space h={20} />
      <Text>
        ITエンジニアYouTuber。神戸大学経営部卒業。未経験から独学でプログラミングを勉強し、新卒でYahooに入社。2019年に株式会社GameHintを創業。
      </Text>
    </Container>
  );
};
