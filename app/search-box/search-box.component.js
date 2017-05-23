"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
/**
 * Created by R on 23/05/2017.
 */
var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
        this.text = "place your text";
    }
    SearchBoxComponent.prototype.clear = function (input) {
        console.log('Clear Clicked ...');
        input.value = "";
    };
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "text", void 0);
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: 'search-box',
            moduleId: module.id,
            templateUrl: 'search-box.component.html',
            styleUrls: ['search-box.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map