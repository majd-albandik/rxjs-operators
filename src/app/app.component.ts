import { skipUntil } from 'rxjs/operators';
import { Component } from '@angular/core';
import { timer, interval, } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // skipUntil operator skips the values before the event or observalbe is resovled
        interval(100)
            .pipe(
                skipUntil(timer(1000))
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output the emitted values  beofre 1000ms will be skiped
}
