import { user } from './user.js';

export function showMessage() {
    alert('Hello ' + user.name);
}

export function confirmAge() {
    var input = window.prompt("What's your age?");

    if ( input >= 18 ) {
        showMessage();
    }
    location.href = "https://www.youtube.com/watch?v=OK03o3BHafk";
    Location.assign(location.href);
}