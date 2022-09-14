declare namespace NodeJS {
  // 環境変数名の定義
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProcessEnv {
    readonly MICRO_CMS_DOMAIN: string;
    readonly NODE_ENV: "development" | "production" | "test";
    readonly TWITTER_BEARER_TOKEN: string;
    readonly TWITTER_USER_ID: string;
  }
}
