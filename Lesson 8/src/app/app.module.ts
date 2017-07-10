import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';
import { BookService } from './books/book.service';
import { BookFakeService } from './books/book-fake.service';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AppRoutes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes)
    ],
    // providers: [{ provide: BookService, useClass: BookFakeService }],
    providers: [BookService],
    declarations: [
        AppComponent,
        BooksListComponent,
        BookDetailsComponent,
        TruncatePipe,
        FavoriteComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
