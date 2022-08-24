import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const query = req.query;
  const id = query.id ? ["", ...(query.id as string[])].join("/") : null;

  if (!id) {
    return res.status(404).json({
      message: "revalidate target not found",
    });
  }

  try {
    await res.revalidate("/");
    await res.revalidate("/blog");
    await res.revalidate(`/blog${id}`);
    await res.revalidate(`/blog/${id}`);
    await res.revalidate(id);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
