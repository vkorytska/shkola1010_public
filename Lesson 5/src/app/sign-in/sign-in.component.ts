import { Component } from '@angular/core';

import { User } from '../user';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {
    user: User;
    
    signIn() {
        this.user = {
            first_name: 'vitaly', last_name: 'khmelko'
        }
    }

    signOut() {
        this.user = null;
    }
}