import { Component } from '@angular/core';

@Component({
    selector: 'app-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent {

    favoriteMessage = '';
    imageWidth = 100;
    showImage = true;
    booksInStock = 2;

    books: any[] = [{
        bookAuthor: 'Tom Jones',
        bookTitle: 'War and Peace 2',
        bookPrice: 29.95,
        bookDescription: 'Book of historical fiction',
        publishedOn: new Date('02/11/1921'),
        inStock: 'yes',
        bookReviews: 15,
        bookImageUrl: 'assets/images/656.jpg'
    }, {
        bookAuthor: 'Mike Jones',
        bookTitle: 'War and Peace 3',
        bookPrice: 19.95,
        bookDescription: 'Book of historical fact',
        publishedOn: new Date('02/11/1921'),
        inStock: 'yes',
        bookReviews: 18,
        bookImageUrl: 'assets/images/656.jpg'
    }]

    onFavoriteClicked(message: string): void {
        this.favoriteMessage = message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
