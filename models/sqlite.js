import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts() {
  const products = await prisma.products.findMany()
  return products
}

export async function getProductsLimit({ limit, offset }) {
  const products = await prisma.products.findMany({ take: parseInt(limit), skip: parseInt(offset) })
  return products
}