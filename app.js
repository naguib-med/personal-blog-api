const dbConnector = require('./plugins/db');
const articleRoutes = require('./routes/articleRoutes');

module.exports = async function (fastify) {
    fastify.register(dbConnector);
    fastify.register(articleRoutes);

    fastify.get('/', async (request, reply) => {
        reply.send({ message: 'Welcome to the Personal Blog API' });
    });
};
