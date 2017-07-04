import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    pageTitle = 'Dev Book Store';
    searchBox = '';

    private searchTermStream = new Subject<string>()

    ngOnInit() {
        this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe((term: string) => this.searchBox = term);
    }

    search(term: string) {
        this.searchTermStream.next(term);
    }
}
