import { atom } from "recoil";

export type BlogType = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export const blogState = atom<BlogType[]>({
  key: "blogState",
  default: [
    {
      id: "",
      title: "",
      body: "",
      createdAt: "",
      publishedAt: "2022-01-01T00:00:00.000Z",
      revisedAt: "2022-01-01T00:00:00.000Z",
      updatedAt: "2022-01-01T00:00:00.000Z",
    },
  ],
});
