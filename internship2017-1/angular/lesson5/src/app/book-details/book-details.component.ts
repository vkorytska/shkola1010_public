import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    id: string;
    book: Book;

    private sub: Subscription;

    constructor(private route: ActivatedRoute, private booksService: BooksService) { }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => {
                this.id = params['id'];

                return this.booksService.getBook(this.id);
            })
            .subscribe(res => this.book = res);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
