import { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";

type ThumbnailType = {
  height: number;
  url: string;
  width: number;
};

export type BlogType = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type PortfolioType = BlogType & {
  thumbnail: ThumbnailType;
};

export type MicroCMSProps = {
  blogData: MicroCMSListResponse<BlogType>;
  portfolioData: MicroCMSListResponse<PortfolioType>;
};

export type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
