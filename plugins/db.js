const fp = require('fastify-plugin')
const mongoose = require('mongoose')

async function dbConnector(fastify, options) {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        fastify.log.info('MongoDB connected');
    } catch (err) {
        fastify.log.error(err);
    }
}

module.exports = fp(dbConnector);