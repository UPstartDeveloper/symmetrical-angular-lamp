// main.ts is where we put bootstrapping logic 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Here we pass our module that we want to bootstrap for the browser
platformBrowserDynamic().bootstrapModule(AppModule);

