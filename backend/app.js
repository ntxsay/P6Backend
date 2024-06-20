﻿const express = require('express');

const app = express();

//Permet de transformer le corps de la requête en objet JSON pour pouvoir l'exploiter (Avoir accès au corps de la requete)
app.use(express.json());

//Middleware pour gérer les erreurs CORS
//Route globale
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//Permet à l'utilisateur de s'inscrire sur l'application
// Authentification Non Requise
app.post('/api/auth/signup', (req, res, next) => {
    
});

//Permet à l'utilisateur de s'authentifier sur l'application
// Authentification Non Requise
app.post('/api/auth/login', (req, res, next) => {

});

//Permet d'afficher tous les livres de l'application
// Authentification Non Requise
app.get('/api/books', (req, res, next) => {

});

//Permet d'enregister un l'application
// Authentification Requise
app.post('/api/books', (req, res, next) => {

});

//Permet d'afficher un livre de l'application par son id
// Authentification Non Requise
app.get('/api/books/:id', (req, res, next) => {

});

//Permet de mettre à jour un livre de l'application par son id
// Authentification Requise
app.put('/api/books/:id', (req, res, next) => {

});

//Permet de supprimer un livre de l'application par son id
// Authentification Requise
app.delete('/api/books/:id', (req, res, next) => {

});

//Permet de retourner les 3 livres les mieux notés de l'application
// Authentification Non Requise
app.get('/api/books/bestrating', (req, res, next) => {

});

//Permet à l'utilisateur de noter (une seule fois) un livre de l'application
// Authentification Requise
app.post('/api/books/:id/rating', (req, res, next) => {

});

module.exports = app;