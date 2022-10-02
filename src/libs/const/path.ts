export const PATH = {
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
  INDEX: "/",
  PORTFOLIO: "/portfolio",
};

export const GITHUB_ENDPOINT = "https://api.github.com/graphql";

/** @package */
export const getPath = (pathKey: keyof typeof PATH) => {
  const val = PATH[pathKey];
  return val;
};
