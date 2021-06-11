import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    /*
    template: `
        <h1>My App</h1>
        <p>Keeping track of the media I want to watch.
    `   // example of an "inline-template"
    */
    templateUrl: './app.component.html',
    // CSS goes below
    /*
    styles: [`
        h1 { color: #ffffff; }
        `, `
        .description {
            color: green;
            font-style: italic;
        }
    `],
    */
    // Note: you can use more than 1 CSS file for one component
    // also note: Angular has additional logic that
        // will scope these styles to JUST the components you apply them to
    styleUrls: [
       './app.component.css',
    ]

})
export class AppComponent {}
