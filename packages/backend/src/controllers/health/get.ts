import { Request, Response } from "express";

const get = (request: Request, response: Response) => {
  try {
    return response.status(200).json({ message: "Server is fine ✅" });
  } catch (error) {
    return response.status(400).json({ message: "Server is down 🔥" });
  }
};

export default get;
