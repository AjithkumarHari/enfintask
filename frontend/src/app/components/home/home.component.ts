import { Component } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { NgIf } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/Book';
import { take } from 'rxjs';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BookListComponent,
    AddBookComponent,
    NgIf,
    EditComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  add: boolean = false;
  edit: boolean = false;
  books: Book[] = []

  constructor(private bookService: BookService){}


  ngOnInit(){
    this.getBooks();
  }

  getBooks(){
    this.bookService.getAllBooks().pipe(take(1)).subscribe((data: Book[])=>{this.books = data
      console.log(data);
      
    });
  }
   
  onBooksSeachFilter(text: string){
    if(text ==''){
      this.getBooks()
    }else{
      this.books = this.books.filter(booking => {
        const lowercaseText = text.toLowerCase();
        const lowercaseName = booking.name.toLowerCase();
        return lowercaseName.includes(lowercaseText);
      });
    }
  }


  addBook(){
    this.add = true
  }

  cancelAddBox(){
    this.add=false

  }

  cancelEditBox(){
    this.edit = false;
  }

  afterAddTask(){
    this.getBooks();
    this.cancelAddBox();
  }
  afterEditTask(){
    this.getBooks();
    this.cancelEditBox();
  }


  deleteTask(bookId: string){
    this.bookService.deleteTaskById(bookId).pipe(take(1)).subscribe(()=>this.getBooks());
  }
 

  editTask(task: Book){
    // this.taskForEd it = task;
    // this.edit = true;
  }

  


}
