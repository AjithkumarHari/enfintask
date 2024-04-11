import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../types/Book';
import { FormsModule,  } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  name: string = ""
  description: string= ""
  publishDate!: Date
  price: number = 0

  @Output() onCancel : EventEmitter<void> = new EventEmitter();
  @Output() onCreated : EventEmitter<void> = new EventEmitter();

 constructor(private bookService: BookService){}

  onClickCancel(){
    this.onCancel.emit()
  }
  onSubmitNewBook(){
     
    console.log('somtehi');
    
      const book: Book = {
        name: this.name,
        description: this.description,
        publishDate: this.publishDate,
        price: this.price 
      } 
      console.log(book,"book");
      
      this.bookService.addBook(book).pipe(take(1)).subscribe((data)=>
        {
          console.log(data);
          
          this.onCreated.emit()
        })
      
 
  }

}
