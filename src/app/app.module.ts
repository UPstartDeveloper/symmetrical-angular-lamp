import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';


@NgModule({
    imports: [
        BrowserModule, 
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ // list of comps to use 
        AppComponent,
    ]  
})
export class AppModule {

}
