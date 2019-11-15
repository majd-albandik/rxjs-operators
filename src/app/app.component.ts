import { take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, of, timer, interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // emits one value every 1000ms
        interval(1000).subscribe((a) => console.log(a));
    }
}
