import { User } from './user';

export const USERS: User[] = [
    { first_name: 'first name 1', last_name: 'last name 1'},
    { first_name: 'first name 2', last_name: 'last name 2'},
    { first_name: 'first name 3', last_name: 'last name 3', date_of_birth: new Date(1983, 5, 11) },
    { first_name: 'first name 4', last_name: 'last name 4'},
    { first_name: 'first name 5', last_name: 'last name 5', date_of_birth: new Date(1965, 2, 10)}
]