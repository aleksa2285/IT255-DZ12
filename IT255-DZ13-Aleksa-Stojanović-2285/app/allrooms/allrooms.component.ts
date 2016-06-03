import {Component, Validators} from 'angular2/core';
import {HttpService} from '../http.service';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {SortPipe} from '../pipes/sort.pipe';


@Component({
	
	pipes: [SortPipe]
	selector: 'rooms', 
	templateUrl: 'app/allrooms/allrooms.html', 
	providers: [HttpService]


})

export class AllRoomsComponent{
	
	rooms: Object[];
	http: Http;
	constructor(private _httpService: HttpService, private _http: Http){
	this.http = _http;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('token', localStorage.getItem('token'));
	this.http.get('http://localhost/getrooms.php', {headers: headers})
		.map(res => res.json())
		.subscribe(rooms => {this.rooms = rooms.rooms
		
 setInterval(function(){
			$('#myTable').DataTable();
			},200);
		}, 
		err =>{
		alert("Došlo je do greške" + JSON.stringify(err));
		this.router.parent.navigate(['./MainPage']);
		}

		);
	}

}







