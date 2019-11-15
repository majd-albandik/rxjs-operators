import { tap, map, pluck, first } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // first takes the first value which meet the condition and complete the stream (no other values will be handelt any more)
        range(0, 10).pipe(
            map((index: number) => new Friend(index)),
            first((friend: Friend) => friend.name === 'name 8')
        ).subscribe((value) => console.log(value));

    }
}

class Friend {
    name: string;
    matualFriends: string;
    constructor(public index: number) {
        this.name = `name ${index}`;
        this.matualFriends = `matual friends ${index * 5}`;
    }
}
