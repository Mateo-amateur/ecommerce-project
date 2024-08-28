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
    'SELECT * from Products limit 10;'
  )

  return products[0]
}