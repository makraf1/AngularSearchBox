
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBoxComponent} from "./search-box/search-box.component";




@Component({
    selector:'App',
    template: `<search-box placeholder="Custom placeholder"></search-box>`
})
export class App {


}

 
@NgModule({
    declarations: [App,SearchBoxComponent],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);