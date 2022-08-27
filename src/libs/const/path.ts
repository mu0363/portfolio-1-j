export const PATH = {
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
  INDEX: "/",
  PORTFOLIO: "/portfolio",
};

// TODO Dynamic routes時の処理を追加
/** @package */
export const getPath = (pathKey: keyof typeof PATH) => {
  const val = PATH[pathKey];
  return val;
};
