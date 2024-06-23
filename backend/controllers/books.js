// bookController : contient toute la logique métier de la gestion des livres


const Book = require('../models/Book.js');

/**
 * Retourne tous les livres
 * @param req
 * @param res
 * @param next
 */
exports.getAllBooks = (req, res, next) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
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
        .then(() => res.status(201).json({ message: 'Le livre a été enregistré avec succès !'}))
        .catch(error => res.status(400).json({ error }));
}

/**
 * Retourne un livre par son Id
 * @param req
 * @param res
 * @param next
 */
exports.getBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({ error }));
};

/**
 * Met à jour un livre.
 * L'authentification de l'utilisateur est requise
 * @param req
 * @param res
 * @param next
 */
exports.updateBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le livre a été modifié avec succès !'}))
        .catch(error => res.status(400).json({ error }));
};

/**
 * Supprime un livre.
 * L'authentification de l'utilisateur est requise
 * @param req
 * @param res
 * @param next
 */
exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le livre a été supprimé avec succès !'}))
        .catch(error => res.status(400).json({ error }));
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