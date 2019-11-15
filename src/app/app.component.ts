import { takeWhile, filter, takeUntil, skip, skipWhile } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range, from, timer, interval, } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // skipWhile operator skips the values while the cbF give true back
        range(1, 9)
            .pipe(
                skipWhile(n => n < 5)
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output 5 6 7 8 9
}
