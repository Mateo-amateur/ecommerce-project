import mysql from 'mysql2/promise'

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "434341321",
  database: "ecommerce_project"
}

const connection = await mysql.createConnection(config)

export async function getProducts() {
  const products = await connection.query(
    'SELECT * from Products;'
  )

  return products[0]
}

export async function getProductsLimit({ limit, offset }) {
  const products = await connection.query(
    `SELECT * from Products 
    LIMIT ? 
    OFFSET ?;`, [parseInt(limit), parseInt(offset)]
  )

  return products[0]
}