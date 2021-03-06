System.register(['angular2/core', 'angular2/router', './aboutus/aboutus.component', './mainpage/mainpage.component', './allrooms/allrooms.component', './login/login.component', './register/register.component', './addroom/addroom.component', './changeroom/changeroom.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, aboutus_component_1, mainpage_component_1, allrooms_component_1, login_component_1, register_component_1, addroom_component_1, changeroom_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (allrooms_component_1_1) {
                allrooms_component_1 = allrooms_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (addroom_component_1_1) {
                addroom_component_1 = addroom_component_1_1;
            },
            function (changeroom_component_1_1) {
                changeroom_component_1 = changeroom_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'proba',
                        templateUrl: 'app/router.html',
                        directives: [router_2.ROUTER_DIRECTIVES],
                        styles: ['nav.navbar.navbar-default{margin-bottom: 0px;}', '#bs-example-navbar-collapse-1{background-color:black; color:white;}', 'div.container-fluid{background-color:black; color:white;}', 'div.container-fluid a:hover{color:white;}', 'div.container-fluid a:active{color:white;}', 'div.container{width:100%; padding-left: 0px;padding-right:0px;}'],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/aboutus', name: 'AboutUs', component: aboutus_component_1.AboutUsComponent },
                        { path: '/allrooms', name: 'AllRooms', component: allrooms_component_1.AllRoomsComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/addroom', name: 'Addroom', component: addroom_component_1.AddroomComponent },
                        { path: '/changeroom', name: 'Changeroom', component: changeroom_component_1.ChangeroomComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map