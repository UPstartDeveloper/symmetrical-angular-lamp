import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

@NgModule({
    imports: [
        BrowserModule, 
    ],
    declarations: [  // list of comps, directives, or pipes that may appear in the template
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective
    ],
    bootstrap: [ // list of comps to use when "bootstrapping" the app
        AppComponent,
    ]  
})
export class AppModule {}
