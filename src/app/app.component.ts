import { tap, map } from 'rxjs/operators';
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
        // tap used to just do somthing simple like console.log and it cannot change
        // the value so the values will be passed to the next operator like it is
        range(1, 2).pipe(
            map((value) => value * 2),
            tap((value) => console.log('value after map#1 ', value)),
            map((value) => value * 2),
            tap((value) => console.log('value after map#2 ', value))
        ).subscribe();

    }
}
