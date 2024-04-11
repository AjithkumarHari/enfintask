import express from 'express';
const router = express.Router();
import { createBook,getAllBooks,removeBook } from '../Controller/bookController.js';

router.post('/addBook', createBook);
router.get('/getBooks', getAllBooks);
router.delete('/deleteBook/:bookId', removeBook);

export default router;