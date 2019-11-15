import { takeWhile, filter, takeUntil } from 'rxjs/operators';
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
        // takeUntil operator takes values from source until some event or observable is resovled (i.e component destroied)
        interval(100)
            .pipe(
                takeUntil(timer(1000))
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output is 0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 after 1000ms no values will be emited any more because timer is resolved
}
