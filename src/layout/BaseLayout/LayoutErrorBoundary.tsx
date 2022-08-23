import { Container, Text, Stack, Title, Group } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";

export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Container>
      <Group position="center" sx={{ height: "100vh" }}>
        <Stack justify="center" align="center">
          <Title>Something went wrong!</Title>
          <Text>{error.message}</Text>
        </Stack>
      </Group>
    </Container>
  );
};
