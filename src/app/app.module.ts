import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
    imports: [  // building blocks for other stuff 
        BrowserModule, 
        ReactiveFormsModule
    ],
    declarations: [  // list of comps, directives, or pipes that may appear in the template
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    bootstrap: [ // list of comps to use when "bootstrapping" the app
        AppComponent,
    ]  
})
export class AppModule {}
