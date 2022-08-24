const PATH = {
  INDEX: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  PORTFOLIO: "/portfolio",
  CONTACT: "/contact",
};

// TODO Dynamic routes時の処理を追加
/** @package */
export const getPath = (pathKey: keyof typeof PATH) => {
  const val = PATH[pathKey];
  return val;
};
