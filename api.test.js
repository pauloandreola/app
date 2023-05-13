import { describe, before, after, it } from 'node:test'
import { strictEqual } from 'node:assert/strict'
import { deepStrictEqual, ok } from 'node:assert'

const BASE_URL = 'http://localhost:3000'

describe('API workflow', () => {
  let _server = {}
  before(async ()=> {
    _server = (await import('./api.js')).app
    await new Promise(resolve => _server.onde('Listening', resolve))
  })
  after(done => _server.close(done))

  it ('Should receive not authorized given wrong user and password', async()=> {
    const data = {
      user: 'Paulo Andreola',
      password: '1234' 
    }
    const req = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    strictEqual( req.status, 401)
    const res = await req.json()
    deepStrictEqual(res, { error: 'user invalid'})
  })

  it ('Should login successfully given user and password', async()=> {
    const data = {
      user: 'Paulo Andreola',
      password: '1234' 
    }
    const req = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    strictEqual( req.status, 200)
    const res = await req.json()
    ok(res.token, ' token should be present')
  })
})