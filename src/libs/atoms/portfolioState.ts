import { atom } from "recoil";
import type { PortfolioType } from "src/libs/types";

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
