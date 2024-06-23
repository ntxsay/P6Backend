const express = require('express');
const bookController = require('../controllers/books');
const auth = require('../middleware/auth');

const router = express.Router();


router.get('/', auth, bookController.getAllBooks);

router.post('/', auth, bookController.createBook);

router.get('/:id', auth, bookController.getBook);

router.put('/:id', auth, bookController.updateBook);

router.delete('/:id', auth, bookController.deleteBook);

router.get('/bestrating', auth, bookController.getBestRatingBooks);

router.post('/:id/rating', bookController.rateBook);

module.exports = router;