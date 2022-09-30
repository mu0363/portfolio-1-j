import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TwitterType } from "src/types";

export const useTwitterQuery = () => {
  const tweetsFetcher = async () => {
    const res = await axios.get<TwitterType[]>("/api/tweets");
    return res.data;
  };

  return useQuery<TwitterType[], Error>(["tweets"], tweetsFetcher);
};
