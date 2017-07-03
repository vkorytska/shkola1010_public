import { Component, OnChanges, Input } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnChanges {

    @Input()
    searchName: string;

    books: IBook[];
    favoriteMessage = '';
    imageWidth = 100;
    showImage = true;
    booksInStock = 2;
    errorMessage: string;

    constructor(private bookService: BookService) { }

    ngOnChanges() {
        this.getBooks();
    }

    getBooks() {
        this.bookService.getBooks(this.searchName)
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
