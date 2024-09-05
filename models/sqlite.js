import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts() {
  const products = await prisma.products.findMany()
  return products
}