import { createServer } from 'node:http'

async function handler(req, res) {
  res.end('Hello world')
}

const app = createServer(handler)
.listen(3000, () => console.log('Listening at port 3000'))

export { app }