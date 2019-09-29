import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

if (dev) {
  polka() // You can also use Express
    .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
    )
    .listen(PORT, err => {
    if (err) console.log('error', err);
    });
}

const jsonSend = (req, res, next) => {
  res.json = (payload) => {
    res.setHeader('Content-Type', 'application/json');
    const jsonResponse = JSON.stringify(payload);
    res.end(jsonResponse);
  }

  next()
}

polka()
  .use(jsonSend)
  
export { sapper };