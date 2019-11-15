import { every, distinctUntilChanged, defaultIfEmpty } from 'rxjs/operators';
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
        // defaultIfEmpty creates an Observalbe from source observable
        // if the source obserbale completes before emitting any values => default value will be emited
        // has no effect if the source observable ever emited any values
        from([])
            .pipe(
                defaultIfEmpty([1, 1, 1])
            )
            .subscribe(
                (value) => console.log(value)
            );
    }
    // output  [ 1, 1, 1 ]
}

