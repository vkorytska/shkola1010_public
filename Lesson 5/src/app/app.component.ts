import { Component }             from '@angular/core';

import { USERS }                 from './users';
import { User }                  from './user';

@Component({
    templateUrl: './app.component.html',
    selector: 'my-app',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    users: User[] = USERS;
}