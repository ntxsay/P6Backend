const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

//Permet à l'utilisateur de s'inscrire sur l'application
// Authentification Non Requise
router.post('/signup', (req, res, next) => {

});

//Permet à l'utilisateur de s'authentifier sur l'application
// Authentification Non Requise
router.post('/login', (req, res, next) => {

});

module.exports = router;