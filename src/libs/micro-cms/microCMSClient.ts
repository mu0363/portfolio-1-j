import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microCMSClient = createClient({
  apiKey: process.env.MICRO_CMS_API_KEY as string,
  serviceDomain: process.env.MICRO_CMS_DOMAIN,
});
