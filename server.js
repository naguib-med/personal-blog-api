const fastify = require('fastify')({ logger: true });
const app = require('./app');
require('dotenv').config();

const start = async () => {
    try {
        await app(fastify);
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        fastify.log.info(`Server running at http://localhost:3000/`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
