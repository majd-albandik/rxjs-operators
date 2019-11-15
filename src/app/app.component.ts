import { takeWhile, filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range, from, } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // takeWhile operator takes just values from source observable which meet the condition
        // (Not like filter because it stops emiting after the first dismatch )
        from([1, 9, 3, 2])
            .pipe(
                filter((n: number) => n < 5)
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output  with takeWhile 1
    // output  with filter 1 3 2
}

