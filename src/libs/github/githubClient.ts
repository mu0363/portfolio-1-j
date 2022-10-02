import { GraphQLClient } from "graphql-request";
import { GITHUB_ENDPOINT } from "src/libs/const";

export const githubClient = new GraphQLClient(GITHUB_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
