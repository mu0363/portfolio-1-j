declare namespace NodeJS {
  // 環境変数名の定義
  type ProcessEnv = {
    readonly MYAPP_GITHUB_TOKEN: string;
    readonly NODE_ENV: "development" | "production" | "test";
  };
}
