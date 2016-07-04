System.register(['angular2/core', 'angular2/common', 'angular2/http', '../shareservice/data.service', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, data_service_1, router_1;
    var ChangeroomComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ChangeroomComponent = (function () {
                function ChangeroomComponent(builder, http, router, dataService) {
                    this.dataService = dataService;
                    this.data = this.dataService.getData();
                    console.log(this.data[0].roomname, this.data.tv);
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        roomName: ["" + this.data[0].roomname, common_1.Validators.none],
                        hasTV: ["" + this.data[0].tv, common_1.Validators.none],
                        beds: ["" + this.data[0].beds, common_1.Validators.none],
                        brojkvadrata: ["" + this.data[0].brojkvadrata, common_1.Validators.none]
                    });
                }
                ChangeroomComponent.prototype.onModifyRoom = function () {
                    var _this = this;
                    var data = "roomName=" + this.registerForm.value.roomName + "&hasTV=" + this.registerForm.value.hasTV + "&beds=" + this.registerForm.value.beds + "&brojkvadrata=" + this.registerForm.value.brojkvadrata;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://localhost/updateroom.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno ste izmenili informacije o sobi");
                            _this.router.parent.navigate(['./AllRooms']);
                        }
                        else {
                            alert("Invalid argument for room");
                        }
                    });
                };
                ChangeroomComponent = __decorate([
                    core_1.Component({
                        select: 'addroom',
                        templateUrl: 'app/changeroom/changeroom.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router, data_service_1.DataService])
                ], ChangeroomComponent);
                return ChangeroomComponent;
            }());
            exports_1("ChangeroomComponent", ChangeroomComponent);
        }
    }
});
//# sourceMappingURL=changeroom.component.js.map