import BOOK from '../Model/Schema/bookSchema.js'

export const createNewBook = async (bookDetails) => {
    const newBook = new BOOK(bookDetails);
    newBook.save(); 
    return newBook
};
export const editBookDetails = async (bookDetails) => {
    const newBook = new BOOK(bookDetails);
    newBook.save(); 
    return newBook
};
export const deleteBook= async (id) => {
    return await BOOK.deleteOne({_id:id})
};

export const findAllBooks= async (bookDetails) => {
    return await BOOK.find();
};