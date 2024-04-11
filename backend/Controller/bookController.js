import { createNewBook ,findAllBooks, deleteBook} from '../Service/bookService.js';

export const createBook = async (req,res)=>{
    try{
        const data = req.body;
        if(Object.entries(data).length!=4)
            res.status(400).send('Bad Request');
        const result = await createNewBook(data);
        res.send(result)
    }catch(error){
        console.log('controller error',error);
        res.status(500).send('Server Error')
    }
}
export const updateBook = async (req,res)=>{
    try{
        const data = req.body;
        const result = await createNewBook(data);
        res.send(result)
    }catch(error){
        console.log('controller error',error);
        res.status(500).send('Server Error')
    }
}
export const removeBook = async (req,res)=>{
    try{
        const bookId = req.params.bookId
        const result = await deleteBook(bookId);
        res.send(result)
    }catch(error){
        console.log('controller error',error);
        res.status(500).send('Server Error')
    }
}
export const getAllBooks = async (req,res)=>{
    try{
        const result = await findAllBooks();
        res.send(result)
    }catch(error){
        console.log('controller error',error);
        res.status(500).send('Server Error')
    }
}