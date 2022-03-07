const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../app')

const assert = chai.assert
// const request = chai.request(app)

chai.should()

chai.use(chaiHttp)

describe('Task API', () => {
    it('Should get all of task', () => {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                response.should.have.status(200)
            })
    })
})