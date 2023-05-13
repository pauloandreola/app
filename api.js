import { once } from 'node:events'
import { createServer } from 'node:http'
import JWT from 'jsonwebtoken'

const DEFAULT_USER = {
  user:  'Paulo Andreola',
  password: '1234'
}

const JWT_KEY = 'abc123'

async function loginRoute(req, res) {
  const { user, password } = JSON.parse(await once(req, 'data'))
  if(user != DEFAULT_USER.user || password != DEFAULT_USER.password) {
    res.writeHead(401)
    res.end(JSON.stringify({error: 'user invalid!'}))
    return;
  }

  const token = JWT.verify({user, message: 'This is payload'}, JWT_KEY, {expiresIn: '5m'})
  res.end(JSON.stringify({token}))

}

async function handler(req, res) {
  if (req.url === '/login' && req.method === 'POST') {
    return loginRoute(req, res)
  }
  res.end('Hello world')
}

const app = createServer(handler)
.listen(3000, () => console.log('Listening at port 3000'))

export { app }