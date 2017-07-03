import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    getBooks(nameToSearch: string): Observable<IBook[]> {
        return this.http
            .get('assets/api/books/books.json')
            .map((response: Response) => (<IBook[]>response.json()).filter(b => b.name.indexOf(nameToSearch) !== -1));
    }
}
