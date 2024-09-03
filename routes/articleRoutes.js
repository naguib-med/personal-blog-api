const articleController = require('../controllers/articleController');

async function routes(fastify, options) {
    fastify.get('/articles', articleController.getAllArticles);
    fastify.get('/articles/:id', articleController.getArticleById);
    fastify.post('/articles', articleController.createArticle);
    fastify.put('/articles/:id', articleController.updateArticle);
    fastify.delete('/articles/:id', articleController.deleteArticle);
}

module.exports = routes;
