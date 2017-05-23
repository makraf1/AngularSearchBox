import {Component, Input} from "@angular/core";
declare  const module;
/**
 * Created by R on 23/05/2017.
 */

@Component({
    selector:'search-box',
    moduleId:module.id,
    templateUrl:'search-box.component.html',
    styleUrls:['search-box.component.css']
})
export class SearchBoxComponent{
    @Input('placeholder')
    text="place your text";

    clear(input){
        console.log('Clear Clicked ...');
        input.value="";

    }
}
