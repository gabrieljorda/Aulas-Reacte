import fastify from 'fastify';

import cors from '@fastify/cors';

import routes from './routes.js';

const app = fastify();

await app.register(cors, {

 origin: '*',

});

app.register(routes);

app

 .listen({

   port: 3333,

 })

 .then(() => {

   console.log('Server running on port 3333');

 });

 