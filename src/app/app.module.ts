import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [
        BrowserModule, 
    ],
    declarations: [  // list of comps that may appear in the template
        AppComponent,
        MediaItemComponent,
    ],
    bootstrap: [ // list of comps to use when "bootstrapping" the app
        AppComponent,
    ]  
})
export class AppModule {

}
