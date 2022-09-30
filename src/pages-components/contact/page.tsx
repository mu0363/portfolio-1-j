import { Button, Center, Space, Stack, Textarea, TextInput, createStyles } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import type { FC } from "react";
import type { ContactForm } from "src/types";
import { SectionTitle } from "src/components/SectionTitle";
import { PageContainer } from "src/layout/PageContainer";

const useStyles = createStyles((_theme) => ({
  error: {
    fontWeight: "bold",
  },
}));

const schema = z.object({
  name: z.string().min(2, { message: "2文字以上でお願いします。" }),
  email: z.string().email({ message: "有効なアドレスを入力してください。" }),
  message: z
    .string()
    .min(5, { message: "メッセージが短すぎます。" })
    .max(200, { message: "200文字以内でお願いします。" }),
});

/** @package */
export const Contact: FC = () => {
  const { classes } = useStyles();
  const form = useForm<ContactForm>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = () => {
    const formData: ContactForm = {
      name: form.values.name,
      email: form.values.email,
      message: form.values.message,
    };
    // TODO データ送信実装する
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <PageContainer>
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
    </PageContainer>
  );
};
