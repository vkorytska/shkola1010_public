import { Component } from '@angular/core';

@Component({
	selector: 'app-books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
	favoriteMessage = '';
	imageWidth = 159;
	showImage = true;

	books: any[] = [{
		bookAuthor: 'Stephen Hawkin',
		bookTitle: 'The Universe in a Nutshell',
		bookImageUrl: 'assets/images/2095.jpg'
	}]

	onFavoriteClicked(message: string): void {
		this.favoriteMessage = message;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}
}
