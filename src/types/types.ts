import { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";
import { GetRepositoriesQuery } from "src/types/generated";

type StringRecord<T extends string> = Record<T, string>;

// microCMS
type ThumbnailType = {
  height: number;
  url: string;
  width: number;
};

type BlogKey = "id" | "title" | "body" | "createdAt" | "publishedAt" | "revisedAt" | "updatedAt";
export type BlogType = StringRecord<BlogKey>;

export type PortfolioType = BlogType & {
  thumbnail: ThumbnailType;
};

// Twitter
type TwitterKey = "id" | "name" | "created_at" | "profile_image_url" | "tweet" | "userId" | "username";
export type TwitterType = StringRecord<TwitterKey>;

type TweetKey = "id" | "created_at" | "text";
export type TweetType = StringRecord<TweetKey>;

export type IndexProps = {
  blogData: MicroCMSListResponse<BlogType>;
  githubQueryData: GetRepositoriesQuery;
  portfolioData: MicroCMSListResponse<PortfolioType>;
};

export type ContentType = BlogType & MicroCMSContentId & MicroCMSDate;

type ContactFormKey = "name" | "email" | "message";
export type ContactForm = StringRecord<ContactFormKey>;

export type User = {
  id: string;
  name: string;
};

// Github
type ExcludeEmptyObject<T> = T extends { id: string } ? T : never;
type ExcludeNullFromRepository = Exclude<
  Exclude<Exclude<GetRepositoriesQuery["user"], null>["pinnedItems"]["nodes"], null>[number],
  null
>;
export type RepositoryType = ExcludeEmptyObject<ExcludeNullFromRepository>;
