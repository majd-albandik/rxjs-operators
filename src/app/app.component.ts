import { take, map, mapTo } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, of, timer, interval, empty, range } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // map operator modified the values just like js map
        range(1, 9).pipe(
            map((value) => value * 100)
        ).subscribe((modifiedValue) => console.log(modifiedValue));

        // mapTo replaces the values with somthing else and it accepts no call back function

        range(1, 9).pipe(
            mapTo('changed')
        ).subscribe((modifiedValue) => console.log(modifiedValue));
    }
}
