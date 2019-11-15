import { every, distinctUntilChanged, defaultIfEmpty, take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range, interval, from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // take operator takes just the specofoed number of values the pass them forwards
        range(1, 9)
            .pipe(
                take(2)
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output  1 2
}

