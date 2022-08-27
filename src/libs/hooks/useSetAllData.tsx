import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import type { MicroCMSProps } from "src/libs/types";
import { blogState } from "src/libs/atoms";
import { portfolioState } from "src/libs/atoms/portfolioState";

/* @package **/
export const useSetAllData = (props: MicroCMSProps): void => {
  const setBlogData = useSetRecoilState(blogState);
  const setPortfolioData = useSetRecoilState(portfolioState);

  useEffect(() => {
    setBlogData(props.blogData.contents);
    setPortfolioData(props.portfolioData.contents);
  }, [props.blogData.contents, props.portfolioData.contents, setBlogData, setPortfolioData]);
};
