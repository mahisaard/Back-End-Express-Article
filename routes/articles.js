import express from 'express';

import { getArticles, createArticle, getArticle, deleteArticle, updateArticle } from '../controllers/articles.js';

const router = express.Router();

//all routes start with article
router.get('/', getArticles);

router.post('/', createArticle);

router.get('/:id', getArticle);

router.delete('/:id', deleteArticle);

router.patch('/:id', updateArticle);

export default router;