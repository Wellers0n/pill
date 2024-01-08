import { Request, Response } from "express";
import { getProductService } from '@/services/product/get'

const getProductController = async (request: Request, response: Response) => {

  const url = request.query.url as string

  const { message, data } = await getProductService({ url })

  return response.status(200).json({ message, data });


};

export { getProductController };
