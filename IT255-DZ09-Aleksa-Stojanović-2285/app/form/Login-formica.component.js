System.register(['angular2/core', './http.service'], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(_httpService) {
                    this._httpService = _httpService;
                    this.user = { mail: '', password: '' };
                }
                LoginFormComponent.prototype.onSubmit = function (form) {
                    this.user.mail = form.value['mail'];
                    this.user.password = form.value['password'];
                };
                LoginFormComponent.prototype.getAllPosts = function () {
                    var _this = this;
                    this._httpService.getPosts()
                        .subscribe(function (response) { return _this.response = response; });
                    (function (error) { return console.log(error); });
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-drivenz',
                        template: "\n\n\t\t\t<h2>Sign up form</h2>\n\t\t\t<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\t\t\t\t<div>\n\t\t\t\t<label for=\"mail\">Mail</label>\n\t\t\t\t<input ngControl=\"mail\" type=\"text\" id=\"mail\" required #email=\"ngForm\">\n\t\t\t\t<span class=\"validation-error\" *ngIf=\"!email.valid\">Not valid</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input ngControl=\"password\" type=\"text\" id=\"password\" required #password=\"ngForm\">\n\t\t\t\t<span class=\"validation-error\" *ngIf=\"!password.valid\">Not valid</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<label for=\"confirm-password\">Confirm Password</label>\n\t\t\t\t<input ngControl=\"confirmpassword\" type=\"text\" id=\"confirm-password\" required #confirmpassword=\"ngForm\">\n\t\t\t\t<span class=\"validation-error\" *ngIf=\"!confirmpassword.valid\">Not valid</span>\n\t\t\t\t</div> \n\t\t\t\t<button type=\"submit\" [disabled]=\"!f.valid || password.value!=confirmpassword.value\" >Submit</button>\n\t\t\t\t<button [click] = \"getAllPosts()\">Pakao</button>\n\t\t\t\t<button> Login </button>\n\t\t\t</form>\n\t\t\t<div><h2>Response: {{response | json}}</h2></div>\n\t\t\t<div>Mail: {{user.mail}}</div>\n\t\t\t<div>Password: {{user.password}}</div>\n\n\t",
                        styleUrls: ['./css/appy.css'],
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_service_1.HttpService !== 'undefined' && http_service_1.HttpService) === 'function' && _a) || Object])
                ], LoginFormComponent);
                return LoginFormComponent;
                var _a;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=Login-formica.component.js.map