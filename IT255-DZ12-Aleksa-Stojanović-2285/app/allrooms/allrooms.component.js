System.register(['angular2/core', '../http.service', 'angular2/http', 'rxjs/Rx', '../pipes/sort.pipe'], function(exports_1, context_1) {
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
    var core_1, http_service_1, http_1, sort_pipe_1;
    var AllRoomsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (sort_pipe_1_1) {
                sort_pipe_1 = sort_pipe_1_1;
            }],
        execute: function() {
            AllRoomsComponent = (function () {
                function AllRoomsComponent(_httpService, _http) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._http = _http;
                    this.http = _http;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/getrooms.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (rooms) { return _this.rooms = rooms.rooms; });
                }
                AllRoomsComponent = __decorate([
                    core_1.Component({
                        pipes: [sort_pipe_1.SortPipe],
                        selector: 'rooms',
                        templateUrl: 'app/allrooms/allrooms.html',
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, http_1.Http])
                ], AllRoomsComponent);
                return AllRoomsComponent;
            }());
            exports_1("AllRoomsComponent", AllRoomsComponent);
        }
    }
});
//# sourceMappingURL=allrooms.component.js.map