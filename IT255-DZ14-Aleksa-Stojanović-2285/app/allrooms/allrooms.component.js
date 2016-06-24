System.register(['angular2/core', '../http.service', '../shareservice/data.service', 'angular2/http', 'rxjs/Rx', '../pipes/sort.pipe', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_service_1, data_service_1, http_1, sort_pipe_1, router_1;
    var AllRoomsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (sort_pipe_1_1) {
                sort_pipe_1 = sort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AllRoomsComponent = (function () {
                function AllRoomsComponent(_httpService, _http, router, dataService) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._http = _http;
                    this.dataService = dataService;
                    this.router = router;
                    this.http = _http;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/getrooms.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (rooms) {
                        _this.rooms = rooms.rooms;
                        setInterval(function () {
                            window.table = $('#myTable').DataTable();
                        }, 200);
                    });
                }
                AllRoomsComponent.prototype.deleteRoom = function (roomID) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/deleteroomservice.php?id=' + roomID, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.serviceResponse = data; });
                    table.ajax.url('getrooms.php').load();
                };
                AllRoomsComponent.prototype.changeInfo = function (item) {
                    var name = [{ "id": item.id, "roomname": item.roomname, "beds": item.beds, "brojkvadrata": item.brojkvadrata, "tv": item.tv }];
                    console.log(item.id, item.roomname, item.beds, item.brojkvadrata, item.tv);
                    this.dataService.sendData(name);
                    this.router.parent.navigate(['./Changeroom']);
                };
                AllRoomsComponent = __decorate([
                    core_1.Component({
                        pipes: [sort_pipe_1.SortPipe],
                        selector: 'rooms',
                        templateUrl: 'app/allrooms/allrooms.html',
                        providers: [http_service_1.HttpService],
                        styleUrls: ['app/allrooms/css/allrooms.component.css']
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, http_1.Http, router_1.Router, data_service_1.DataService])
                ], AllRoomsComponent);
                return AllRoomsComponent;
            }());
            exports_1("AllRoomsComponent", AllRoomsComponent);
        }
    }
});
//# sourceMappingURL=allrooms.component.js.map