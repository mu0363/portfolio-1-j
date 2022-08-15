// FIX ME
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Center, Container, Space, Stack, Textarea, TextInput, createStyles } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import type { FC } from "react";
import { SectionTitle } from "src/component/SectionTitle";

type ContactForm = {
  email: string;
  name: string;
  message: string;
};

const useStyles = createStyles((_theme) => ({
  error: {
    fontWeight: "bold",
  },
}));

const schema = z.object({
  email: z.string().email({ message: "有効なアドレスを入力してください。" }),
  name: z.string().min(2, { message: "2文字以上でお願いします。" }),
  message: z
    .string()
    .min(5, { message: "メッセージが短すぎます。" })
    .max(200, { message: "200文字以内でお願いします。" }),
});

/** @package */
export const Contact: FC = () => {
  const { classes } = useStyles();
  const form = useForm<ContactForm>({
    validate: zodResolver(schema),
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const handleSubmit = () => {
    const formData: ContactForm = {
      email: form.values.email,
      name: form.values.name,
      message: form.values.message,
    };
    // TODO データ送信実装する
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <Container>
      <SectionTitle title="Contact" />
      <Space h={20} />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            placeholder="your@email.com"
            label="Email"
            required
            {...form.getInputProps("email")}
            classNames={{ error: classes.error }}
          />
          <TextInput
            placeholder="Taro Yamada"
            label="Name"
            required
            {...form.getInputProps("name")}
            classNames={{ error: classes.error }}
          />
          <Textarea
            placeholder="I want to order your goods."
            label="Your message"
            required
            {...form.getInputProps("message")}
            classNames={{ error: classes.error }}
          />
        </Stack>
        <Space h={20} />
        <Center>
          <Button
            type="submit"
            radius="xl"
            sx={(theme) => ({
              background: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
            })}
          >
            Send message
          </Button>
        </Center>
      </form>
    </Container>
  );
};
