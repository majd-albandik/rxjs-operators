import { every } from 'rxjs/operators';
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
        // every emits boolean value if all emited values meet the condition after the source is complete
        range(1, 9)
            .pipe(
                every((n: number) => n > -1)
            )
            .subscribe((value) => console.log(value));

        // output true
    }
}

