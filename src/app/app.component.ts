import { takeWhile, filter, takeUntil, skip } from 'rxjs/operators';
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
        // skip operator skips some values we specify as a parameter
        range(1, 9)
            .pipe(
                skip(5)
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output 6 7 8 9
}
