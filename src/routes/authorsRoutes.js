import express from 'express';
import AuthorsControllers from '../controllers/authorsControllers.js';

const router = express.Router();

router.get('/authors', AuthorsControllers.getAllAuthors);
router.get('/authors/:id', AuthorsControllers.getAuthor);
router.post('/authors', AuthorsControllers.createAuthor);
router.put('/authors/:id', AuthorsControllers.updateAuthor);
router.delete('/authors/:id', AuthorsControllers.deleteAuthor);

export default router;