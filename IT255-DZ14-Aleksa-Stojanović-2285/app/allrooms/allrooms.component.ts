import {Component, Validators} from 'angular2/core';
import {HttpService} from '../http.service';
import {DataService} from '../shareservice/data.service';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {SortPipe} from '../pipes/sort.pipe';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import {DataTableDirectives} from 'angular2-datatable/datatable';


@Component({
	
	pipes: [SortPipe],
	selector: 'rooms', 
	templateUrl: 'app/allrooms/allrooms.html', 
	providers: [HttpService], 
	styleUrls:['app/allrooms/css/allrooms.component.css']


})

export class AllRoomsComponent{



	rooms: Object[];
	http: Http;
    serviceResponse: String;
	constructor(private _httpService: HttpService, private _http: Http, router: Router, private dataService: DataService){
	this.router = router;
	this.http = _http;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('token', localStorage.getItem('token'));
	this.http.get('http://localhost/getrooms.php', {headers: headers})
		.map(res => res.json())
		.subscribe(rooms => {this.rooms = rooms.rooms
		
 setInterval(function(){
			window.table = $('#myTable').DataTable();
			},200);
    });


 }
    public deleteRoom(roomID: Number){

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get('http://localhost/deleteroomservice.php?id='+roomID, {headers:headers})
            .map(res => res.json())
            .subscribe( data => this.serviceResponse = data);
            location.reload();

}
    public changeInfo(item : Object){

       var name = [{"id": item.id, "roomname" : item.roomname, "beds": item.beds, "brojkvadrata": item.brojkvadrata,"tv": item.tv}];
       console.log(item.id, item.roomname, item.beds,item.brojkvadrata, item.tv);
       this.dataService.sendData(name);
       this.router.parent.navigate(['./Changeroom']);

 }
		}    }
