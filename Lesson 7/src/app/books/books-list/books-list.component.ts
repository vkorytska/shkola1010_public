import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit {
    books: IBook[];
    favoriteMessage = '';
    imageWidth = 100;
    showImage = true;
    booksInStock = 2;
    errorMessage: string;

    constructor(private bookService: BookService) { }

    ngOnInit() { this.getBooks() }

    getBooks() {
        this.bookService.getBooks()
            .subscribe(
            books => this.books = books,
            error => this.errorMessage = <any>error
            );
    }

    onFavoriteClicked(message: string): void {
        this.favoriteMessage = message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
