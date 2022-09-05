import { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";

// microCMS
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

// Twitter
export type TwitterProfileType = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
};

export type TweetType = {
  id: string;
  created_at: string;
  text: string;
};

export type TwitterType = {
  profile: TwitterProfileType;
  tweets: TweetType[];
};

export type IndexProps = {
  blogData: MicroCMSListResponse<BlogType>;
  portfolioData: MicroCMSListResponse<PortfolioType>;
  twitterData: TwitterType;
};

export type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
