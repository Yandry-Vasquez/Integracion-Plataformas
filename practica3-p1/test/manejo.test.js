const env_variables = require('dotenv').config(); env_variables;

const request = require('supertest')
const mongoose = require('mongoose')

const app = require('../src/index')



describe('TESTING APP', () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI)
    })

    afterAll(async () => await mongoose.disconnect())


   describe('/GET testing', () => {
        test('Responde con stado 200 ok', async () => {
            const response = await request(app).get('/api/v1/manejos').send()
            expect(response.status).toBe(200);
        })

        test('Responde con data ok', async () => {
            const response = await request(app).get('/api/v1/manejos').send()
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    describe('/POST testing', () => {

        afterAll(async () => {
            await ModeloManejo.deleteMany({ ID: "P-000" })
        })

        const data = {
            ID: "P-000", NOMBRE: "6455b09b49b63b6a0599af7e"
        }

        test('Responde con stado 201 ok', async () => {
            const response = await request(app).post('/api/v1/manejo').send()
            expect(response.status).toBe(201);
        })

        test('Responde con datos insertados', async () => {
            const response = await request(app).post('/api/v1/manejo').send(data)
            expect(response.body._id).toBeDefined()
        })
    })
})