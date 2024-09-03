const Article = require("../models/articleModel")

// Get all articles with optional filtering by tag or publish date
const getAllArticles = async (req, reply) => {
    const { tags, date } = req.query;
    const query = {}

    if (tags) {
        query.tags = { $in: tags.split(',') };
    }

    if (date) {
        query.publishDate = { $gte: new Date(date) }
    }

    const articles = await Article.find(query);
    reply.send(articles);
};

// Get a single article by ID
const getArticleById = async (req, reply) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return reply.code(404).send({ message: 'Article not found' });
        }
        reply.send(article);
    } catch (err) {
        reply.code(500).send({ error: 'Error fetching article' });
    }
};

// Create a new article
const createArticle = async (req, reply) => {
   try {
       const { title, content, author, tags } = req.body;
       const article = new Article({ title, content, author, tags });
       await article.save();
       reply.code(201).send(article);
   } catch (err) {
       reply.code(400).send({ error: 'Error creating article' });
   }
}

// Update an existing article
const updateArticle = async (req, reply) => {
    try {
        const { id } = req.params;
        const { title, content, author, tags } = req.body;
        const article = await Article.findByIdAndUpdate(id, { title, content, author, tags }, { new: true });
        if (!article) {
            return reply.code(404).send({ message: 'Article not found' });
        }
        reply.send(article);
    } catch (err) {
        reply.code(400).send({ error: 'Error updating article' });
    }
}

// Delete an article
const deleteArticle = async (req, reply) => {
    try {
        const { id } = req.params;
        const deletedArticle = await Article.findByIdAndDelete(id);
        if (!deletedArticle) {
            return reply.code(404).send({ message: 'Article not found' });
        }
        reply.send({ message: 'Article deleted successfully' });
    } catch (err) {
        reply.code(500).send({ error: 'Error deleting article' });
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}