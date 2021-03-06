const { json } = require('express/lib/response')
const request = require('supertest')
const { response } = require('./app')
const app = require('./app')



describe('RESTFUL API Testing', () => {
    it('Get Subscriber', () => {
        return request(app)
            .get('/subscribers')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.length).toBeGreaterThan(0);
            })
    })

    it('Wrong id', () => {
        return request(app)
            .get('/subscribers/61ee4de6da0ffe01d0d4fefa')
            .expect(404)

    })

    it('Wrong format of ID', () => {
        return request(app)
            .get('/subscribers/61ee423ras')
            .expect(500)
    })

    it('Get Spesific Subscriber', () => {
        return request(app)
            .get('/subscribers/621f1d6c1ef78165b0084129')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toMatchObject({
                    _id: "621f1d6c1ef78165b0084129"
                })
            })
    })

    it('Assign new subscriber', () => {
        return request(app)
            .post('/subscribers')
            .send({
                name: "Seng",
                subscribedToChannel: "Anbia Bohlam"
            })
            .expect(201)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).toMatchObject({
                    name: "Seng",
                    subscribedToChannel: "Anbia Bohlam"
                })
            })
    })

    it('Delete a subscriber', () => {
        return request(app)
            .delete('/subscribers/621f1dc52af185bd23a956b4')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                console.log(res.body)
                expect(res.body).toMatchObject({
                    message: "Deleted Subscriber"
                })
            })
    })
})