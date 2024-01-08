import { Router } from 'express'
import { getProductController } from '@/controllers/product/get'

const productRoutes = Router()

/**
 * @swagger
 * /product:
 *   get:
 *     description: product
 *     tags: ["Product"]
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: url do produto a ser buscado
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    barcode:
 *                      type: string
 *                    brand:
 *                      type: string
 *                    image:
 *                      type: string
 *                    price:
 *                      type: number
 *              example:
 *                message: Produto encontrado com sucesso
 *                data:
 *                  name: Nome do produto
 *                  barcode: Código de barras do produto
 *                  brand: Marca do produto
 *                  image: URL da imagem do produto
 *                  price: Preço do produto
 *       404:
 *         description: Not Found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Produto não encontrado
 */
productRoutes.get('/', getProductController)

export { productRoutes }