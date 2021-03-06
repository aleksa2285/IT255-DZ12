System.register(['angular2/core', '../http.service', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_service_1, router_1, http_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_httpService, _http, router) {
                    this._httpService = _httpService;
                    this._http = _http;
                    this.user = { mail: '', password: '' };
                    this.router = router;
                    this.http = _http;
                    if (localStorage.getItem('token') != null) {
                        this.router.parent.navigate(['./AllRooms']);
                    }
                }
                RegisterComponent.prototype.onPost = function (firstname, lastname, username, password) {
                    var _this = this;
                    var data = "firstname=" + firstname + "&lastname=" + lastname + "&username=" + username + "&password=" + password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'multipart/form-data');
                    return this.http.post('http://localhost/registerservice.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (response) { return _this.response = response; }, function (error) {
                        alert(JSON.stringify(error));
                    }, function () {
                        if (_this.response._body.indexOf("false") === -1) {
                            alert('uspesno ste se registrovali');
                            _this.router.parent.navigate(['./MainPage']);
                        }
                        else {
                            document.getElementById('bad').innerHTML = 'asa;';
                            alert('idiJot');
                        }
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/register/register.html',
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, http_1.Http, router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map