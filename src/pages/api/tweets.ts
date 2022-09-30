import type { NextApiRequest, NextApiResponse } from "next";
import { twitterClient } from "src/libs/twitter/client";
import { TwitterType } from "src/types";

type Error = {
  title: string;
  detail: string | undefined;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<TwitterType[] | { error?: Error }>) => {
  const userId = process.env.TWITTER_USER_ID;
  const twitterResponse = await twitterClient.tweets.usersIdTweets(userId, {
    expansions: ["author_id"],
    "tweet.fields": ["author_id", "created_at"],
    "user.fields": ["name", "profile_image_url", "username"],
    max_results: 5,
  });
  const errors = twitterResponse.errors;
  if (errors !== undefined) {
    return res.status(errors[0].status ? 400 : 500).json({
      error: {
        title: errors[0].title,
        detail: errors[0].detail,
      },
    });
  }

  if (!twitterResponse.includes?.users || !twitterResponse.data) {
    return res.status(400).json({
      error: {
        title: "There is no data",
        detail: "users or data",
      },
    });
  }

  const data = twitterResponse.data;
  const user = twitterResponse.includes.users[0];
  const tweets = data?.map((element) => {
    const tweet: TwitterType = {
      id: element.id,
      username: user.name,
      userId: user.username,
      profile_image_url: user.profile_image_url ?? "",
      tweet: element.text,
      created_at: element.created_at ?? "",
      // FIXME:
      name: "osamu",
    };
    return tweet;
  });
  res.status(200).json(tweets ?? []);
};

export default handler;
