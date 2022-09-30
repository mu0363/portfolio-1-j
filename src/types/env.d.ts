declare namespace NodeJS {
  interface ProcessEnv {
    readonly GITHUB_TOKEN: string;
    readonly MICRO_CMS_DOMAIN: string;
    readonly NODE_ENV: "development" | "production" | "test";
    readonly TWITTER_BEARER_TOKEN: string;
    readonly TWITTER_USER_ID: string;
  }
}
