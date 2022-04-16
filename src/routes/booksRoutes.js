import express from 'express';
import BookController from '../controllers/booksControllers.js';

const router = express.Router();

router.get('/books', BookController.getAllBooks);
router.get('/books/search', BookController.getBooksByPublisher);
router.get('/books/:id', BookController.getBook);
router.post('/books', BookController.createBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

export default router;