# app

no terminal digitar npm init -y
dentro do package.json   "type": "module",
no terminal digitar npm i jsonwebtoken@9.0.0
criar api.js e api.test.js
criar 3 scripts:
    "dev": "node --watch api.js",
    "test:dev":"node --test --watch api.test.js",
    "test": "node --test api.test.js"
Para testar utilizar os comandos no terminal
npm run dev
npm t, ou npm test, ou npm run test

No arquivo api.js
import { createServer } from 'node:http'

async function handler(req, res) {
  res.end('Hello world')
}

createServer(handler)
.listen(3000, () => console.log('Listening at port 3000'))

No primeiro terminal rodar npm run dev

No segundo terminal rodar curl localhost:3000, ou http://localhost:3000/ no browser.

Complementar o api.js com o app conforme abaixo:

const app = createServer(handler)
.listen(3000, () => console.log('Listening at port 3000'))

export { app }

e rodar o npm run test:dev

Começar a implementar os testes no api.test.js

