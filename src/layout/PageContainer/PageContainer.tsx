import { Container } from "@mantine/core";
import type { FC, ReactNode } from "react";

/** @package */
export const PageContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <Container pt={70}>{children}</Container>;
};
