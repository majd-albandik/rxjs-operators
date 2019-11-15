import { every, distinctUntilChanged } from 'rxjs/operators';
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
        // distinctUntilChanged creates an Observalbe
        // which only emits the last value from the source observable id it is different than the one before
        from([1, 2, 2, 2, 3, 5, 5, 5, 5, 5, 5, 6])
            .pipe(
                distinctUntilChanged()
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output  1 2 3 5 6
}

