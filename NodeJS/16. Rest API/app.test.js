const { json }=require('express/lib/response')
const request=require('supertest')
const { response }=require('./app')
const app=require('./app')



describe('RESTFUL API Testing', () => {
    it('Get Subscriber', () => {
        return request(app)
            .get('/subscribers')
            .expect(200)
            .expect('Content-Type', /json/)
    })

    it('Wrong id', () => {
        return request(app)
            .get('/subscribers/61ee4de6da0ffe01d0d4fefa')
            .expect(404)

    })

    it('Get Spesific Subscriber', () => {
        return request(app)
            .get('/subscribers/61ee4de6da0ffe01d0d4fefd')
            .expect('Content-Type', /json/)
            .expect(200, {
                _id: expect.any(String),
                name: expect.any(String),
                subscribedToChannel: expect.any(String),
                subscribeDate: expect.any(String),
                __v: expect.any(Number)

            })
    })





})