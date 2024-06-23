const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.get('/', bookController.getAllBooks);

router.post('/', bookController.createBook);

router.get('/:id', bookController.getBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

router.get('/bestrating', bookController.getBestRatingBooks);

router.post('/:id/rating', bookController.rateBook);

module.exports = router;