// bookController : contient toute la logique métier de la gestion des livres


const Book = require('../models/Book.js');

/**
 * Retourne tous les livres
 * @param req
 * @param res
 * @param next
 */
exports.getAllBooks = (req, res, next) => {

};

/**
 * Crée un livre.
 * L'authentification de l'utilisateur est requise
 * @param req
 * @param res
 * @param next
 */
exports.createBook = (req, res, next) => {
    delete req.body._id;
    const book = new Book({
        ...req.body
    });

    book.save()
        .then(() => res.status(201).json({ message: 'Livre enregistré !'}))
        .catch(error => res.status(400).json({ error }));
}

/**
 * Retourne un livre par son Id
 * @param req
 * @param res
 * @param next
 */
exports.getBook = (req, res, next) => {

};

/**
 * Met à jour un livre.
 * L'authentification de l'utilisateur est requise
 * @param req
 * @param res
 * @param next
 */
exports.updateBook = (req, res, next) => {

};

/**
 * Supprime un livre.
 * L'authentification de l'utilisateur est requise
 * @param req
 * @param res
 * @param next
 */
exports.deleteBook = (req, res, next) => {

};

/**
 * Retourne les 3 livres les mieux notés
 * @param req
 * @param res
 * @param next
 */
exports.getBestRatingBooks = (req, res, next) => {

};

/**
 * Note un livre.
 * La note donnée au livre est définitive.
 * L'authentification de l'utilisateur est requise.
 * @param req
 * @param res
 * @param next
 */
exports.rateBook = (req, res, next) => {

};