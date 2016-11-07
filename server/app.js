const http = require('http');
const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

http
    .createServer(app.callback())
    .listen(3000, () => console.log('See http://localhost:3000/'));