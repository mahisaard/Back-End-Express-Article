import { v4 as uuid } from 'uuid';

let articles = [];

export const getArticles = (req, res) => {
    res.send(articles);
}

export const createArticle = (req, res) => {   
    const article = req.body;

    articles.push({...article, id: uuid()});
    
    res.send(`Article with the title "${article.title}" added to the database.`);
}

export const getArticle = (req, res) => {
    const { id } = req.params;
    
    const foundArticle = articles.find((article) => article.id === id);

    res.send(foundArticle);
}

export const deleteArticle = (req, res) => { 
    const { id } = req.params;
    
    articles = articles.filter((article) => article.id !== req.params.id);

    res.send(`Article with the id ${id} has been deleted from database.`);
}

export const updateArticle =  (req,res) => {
    const { id } = req.params;
    const { title, author, releaseDate } = req.body;

    const article = articles.find((article) => article.id === id);

    if(title) article.title = title;
    if(author) article.author = author;
    if(releaseDate) article.releaseDate = releaseDate;

    res.send(`title with the id ${id} has been updated.`);
}