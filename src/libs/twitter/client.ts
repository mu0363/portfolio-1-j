import Client from "twitter-api-sdk";

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN);
