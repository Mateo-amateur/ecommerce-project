import { Router } from "express"
import { getProducts } from "../models/mysql.js"

const router = Router()

router.get('/', async (req, res) => {
  const products = await getProducts()
  res.json(products)
})

export default router