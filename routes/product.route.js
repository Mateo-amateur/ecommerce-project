import { Router } from "express"
import { getProducts, getProductsLimit } from "../models/sqlite.js"

const router = Router()

router.get('/', async (req, res) => {
  const products = await getProducts()
  res.json(products)
})

router.get('/:limit/:offset', async (req, res) => {
  const { limit, offset } = req.params
  const products = await getProductsLimit({ limit, offset })
  res.json(products)
})

export default router