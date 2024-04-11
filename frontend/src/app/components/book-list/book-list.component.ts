import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Book } from '../../types/Book';
import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor,FormsModule,NgClass,NgIf,SlicePipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  @Output() onAddBook : EventEmitter<void> = new EventEmitter();
  @Input() books!: Book[];

  @Output() onSearchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  @Output() onDeleteTask : EventEmitter<string> = new EventEmitter<string>();
   @Output() onEditTask : EventEmitter<Book> = new EventEmitter<Book>();

  @Input() count!: number;
  searchText: string = '';
  
  currentPage: number = 1;
  pages: number[] = [];


  ngOnChanges(changes: SimpleChanges){
    if (changes['count']) {
      // React to changes in 'count' input
      // const newCount = changes['count'].currentValue;
      // Do something with the new count...
      this.countPages(this.count);
    }
  }

  countPages(total: number){    
    this.pages = []
    for(let i=1;i<=Math.ceil(total/6);i++){
      this.pages.push(i)
    }
  }

  onPrevious($event: Event) {
    $event.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNext($event: Event) {
    $event.preventDefault();
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }

  onPageClick(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  onSearchText(){
    this.onSearchTextChanged.emit(this.searchText);
    this.currentPage = 1;
  }

  onAddClicked(){
    this.onAddBook.emit();
  }

  onDelete(bookId: string | undefined){
    this.onDeleteTask.emit(bookId)
  }

  onEdit(book: Book){
    this.onEditTask.emit(book)
  }

}
