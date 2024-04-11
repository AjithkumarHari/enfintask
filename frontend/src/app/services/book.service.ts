import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  addBook(bookDetails: Book){ 
    return this.http.post(`${this.apiUrl}/addBook`, bookDetails)
  }

  getAllBooks(){
    return this.http.get<Book[]>(`${this.apiUrl}/getBooks`)
  }

  deleteTaskById(bookId:string){
    return this.http.delete(`${this.apiUrl}/deleteBook/${bookId}`)
  }
}
