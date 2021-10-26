/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import { varients } from "../../data";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ varients });
};
