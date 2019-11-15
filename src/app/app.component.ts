import { tap, map, pluck, first, startWith } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range, timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // startWith emits an inital value provided from us and then emits the values from the api (source observable)
        timer(2000, 1000)
            .pipe(
                startWith(10)
            )
            .subscribe((value) => console.log(value));
        // output
        // immediately 10
        // after 2000ms the first value comes from the source 0
        // after 1000ms the seconde value comes from the source 1
    }
}

