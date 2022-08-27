import { atom } from "recoil";

export type ThumbnailType = {
  height: number;
  url: string;
  width: number;
};

export type PortfolioType = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  thumbnail: ThumbnailType;
  updatedAt: string;
};

export const portfolioState = atom<PortfolioType[]>({
  key: "portfolioState",
  default: [
    {
      id: "",
      title: "",
      body: "",
      createdAt: "2022-01-01T00:00:00.000Z",
      publishedAt: "2022-01-01T00:00:00.000Z",
      revisedAt: "2022-01-01T00:00:00.000Z",
      thumbnail: { height: 0, url: "https://source.unsplash.com/random", width: 0 },
      updatedAt: "2022-01-01T00:00:00.000Z",
    },
  ],
});
