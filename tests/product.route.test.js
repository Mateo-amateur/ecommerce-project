import supertest from "supertest"
import app from "../index.js"

const api = supertest(app)

test('should get a response', async () => {
  await api
    .get('/product')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
