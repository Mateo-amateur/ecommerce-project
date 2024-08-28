import express from 'express'
import router from './routes/product.route.js'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/product', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app