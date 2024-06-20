const express = require('express');
const router = express.Router();
const Book = require('../models/Book.js');


//Permet d'afficher tous les livres de l'application
// Authentification Non Requise
router.get('/', (req, res, next) => {

});

//Permet d'enregister un l'application
// Authentification Requise
router.post('/', (req, res, next) => {
    delete req.body._id;
    const book = new Book({
        ...req.body
    });

    book.save()
        .then(() => res.status(201).json({ message: 'Livre enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

//Permet d'afficher un livre de l'application par son id
// Authentification Non Requise
router.get('/:id', (req, res, next) => {

});

//Permet de mettre à jour un livre de l'application par son id
// Authentification Requise
router.put('/:id', (req, res, next) => {

});

//Permet de supprimer un livre de l'application par son id
// Authentification Requise
router.delete('/:id', (req, res, next) => {

});

//Permet de retourner les 3 livres les mieux notés de l'application
// Authentification Non Requise
router.get('/bestrating', (req, res, next) => {

});

//Permet à l'utilisateur de noter (une seule fois) un livre de l'application
// Authentification Requise
router.post('/:id/rating', (req, res, next) => {

});

module.exports = router;