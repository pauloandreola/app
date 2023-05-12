import { createServer } from 'node:http'

async function handler(req, res) {
  res.end('Hello world')
}

createServer(handler)
.listen(3000, () => console.log('Listening at port 3000'))