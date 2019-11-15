import { last } from 'rxjs/operators';
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
        // last operator takes the last emitted value of the source observalbe
        // (emition must be completed i.e with interval(1000) we have no last value)
        range(1, 9)
            .pipe(
                last()
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output 9
}
