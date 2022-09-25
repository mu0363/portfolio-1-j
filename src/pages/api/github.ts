/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GraphQLClient } from "graphql-request";
import { GET_REPOSITORIES } from "../../libs/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { GetRepositoriesQuery } from "generated";

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  try {
    const data = await graphQLClient.request<GetRepositoriesQuery>(GET_REPOSITORIES);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // FIXME: エラー処理
      console.error(error);
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};

export default handler;
