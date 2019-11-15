import { filter } from 'rxjs/operators';
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
        // filter filters the stream and returns all values which meet the condition in th call back function
        range(0, 9).pipe(
            filter((value) => value > 5)
        ).subscribe((filterdValues) => console.log(filterdValues));

    }
}
