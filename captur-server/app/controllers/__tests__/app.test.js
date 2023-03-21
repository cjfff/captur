import server from 'server'
import request from 'supertest'

const path = 'http://localhost:3001/captur/apis/app'

describe('routers: app', () => {
  let app
  beforeAll(async () => {
    app = await server
  })

  it('create', async () => {
    const res = await request(app).post(path).send({
      name: 'test',
    })

    expect(res.status).toEqual(200)
  })

  // it('getList', async () => {
  //   const res = await request(app).get('/apis/sessions')
  //   expect(res.status).toEqual(200)
  // })

  // it('delete', async () => {
  //   const res = await request(app).get('/apis/sessions')
  //   expect(res.status).toEqual(200)
  // })

  afterAll(async done => {
    app.close()
    done()
  })
})
