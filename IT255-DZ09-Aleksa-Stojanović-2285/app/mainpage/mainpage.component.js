System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MainPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MainPageComponent = (function () {
                function MainPageComponent() {
                }
                MainPageComponent.prototype.ngOnInit = function () {
                    function initialize() {
                        var mapProp = {
                            center: new google.maps.LatLng(51.508742, -0.120850),
                            zoom: 5,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                    }
                    google.maps.event.addDomListener(window, 'load', initialize);
                };
                MainPageComponent = __decorate([
                    core_1.Component({
                        selector: 'mainpage',
                        templateUrl: 'app/mainpage/index.html',
                        styleUrls: ['app/mainpage/css/style.css', 'app/mainpage/css/bootstrap.css', 'app/mainpage/css/bootstrap.min.css', 'app/mainpage/css/full-width-pics.css'],
                        styles: ['#prva { width: 100%; }'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPageComponent);
                return MainPageComponent;
            }());
            exports_1("MainPageComponent", MainPageComponent);
        }
    }
});
//# sourceMappingURL=mainpage.component.js.map