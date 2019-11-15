import { every } from 'rxjs/operators';
import { Component } from '@angular/core';
import { range, interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxjs-operators';

    constructor() {
        // every emits boolean value if all emited values meet the condition after the source is complete
        interval(1000)
            .pipe(
                every((n: number) => n > 5)
            )
            .subscribe(
                (value) => console.log(value),
                err => console.log(err),
                () => console.log('complete'),

            );
        // output false (the excution is automaticlly completed when we have some bad value  => better performance)
    }
}

