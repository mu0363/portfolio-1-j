import { Container, Space, Text } from "@mantine/core";
import { NextPage } from "next";
import { SectionTitle } from "src/component/SectionTitle";

const About: NextPage = () => {
  return (
    <Container style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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

export default About;
