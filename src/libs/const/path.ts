export const PATH = {
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
  INDEX: "/",
  PORTFOLIO: "/portfolio",
};

/** @package */
export const getPath = (pathKey: keyof typeof PATH) => {
  const val = PATH[pathKey];
  return val;
};
