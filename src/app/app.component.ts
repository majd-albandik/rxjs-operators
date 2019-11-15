import { tap, map, pluck } from 'rxjs/operators';
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
        // pluck is used to take just one attribute of the object and passt it to the next operator
        range(0, 10).pipe(
            map((index: number) => new Friend(index)),
            // output
            // Friend {index: 0, name: "name 0", matualFriends: "matual friends 0"}
            // Friend {index: 1, name: "name 1", matualFriends: "matual friends 1"}
            // Friend {index: 2, name: "name 2", matualFriends: "matual friends 2"}
            // Friend {index: 3, name: "name 3", matualFriends: "matual friends 3"}

            pluck('name')
            // output
            // name 0
            // name 1
            // name 2
            // name 3
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
