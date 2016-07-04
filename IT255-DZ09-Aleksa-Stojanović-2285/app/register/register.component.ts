import {Component} from 'angular2/core';
import {HttpService} from '../http.service';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';




@Component({
	
	selector: 'register', 
	templateUrl: 'app/register/register.html',
	providers: [HttpService]


})

export class RegisterComponent{
	


	router: Router;
	http: Http;
	constructor(private _httpService: HttpService, private _http: Http, router : Router){
	this.router = router;
	this.http = _http;
		 if(localStorage.getItem('token') != null){
		 var al = localStorage.getItem('token');
		 alert(al + 'a');
		 this.router.parent.navigate(['./AllRooms']);
   }

	}
	user = {mail: '', password: ''}
	response: string;

	onPost(firstname: string, lastname: string, username: string, password:string){

	   var data = "firstname="+firstname+"&lastname="+lastname+"&username="+username+"&password="+password;
	  var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
	   return this.http.post('http://localhost/registerservice.php',data, {headers:headers})
       .map(res => res)
		.subscribe(
		response => this.response = response,
		error=> {alert(JSON.stringify(error));
		}, 
		() => { 
	 	if(this.response._body.indexOf("false") === -1){
	 	alert('uspesno ste se registrovali');
	 	 this.router.parent.navigate(['./MainPage']);
	 	}

	 	else {
		document.getElementById('bad').innerHTML = 'asa;'
	 	alert('idiJot');}
	 	});
		
	 
	}










}