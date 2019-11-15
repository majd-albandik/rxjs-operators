import { take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, of, timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // emits one value after 2000ms like setTimeout
        timer(2000).subscribe((a) => console.log(a));

        // after 3000 ms it starts to emit one value every 1000ms like interval
        timer(3000, 1000).subscribe((a) => console.log(a));
    }
}
