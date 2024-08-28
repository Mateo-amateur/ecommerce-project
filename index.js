import express from 'express'
import router from './routes/product.route.js'
import morgan from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app = express()

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173'
  // ! To add this the path of project-UI
]

const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})

app.use(corsMiddleware())

app.use(express.json())

app.use(morgan('dev'))

app.use('/product', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app