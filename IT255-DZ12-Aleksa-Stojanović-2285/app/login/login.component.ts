import {Component} from 'angular2/core';
import {HttpService} from '../http.service';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
	
	selector: 'login',
	templateUrl: 'app/login/login.html',
	providers:[HttpService]



})
export class LoginComponent{
	

	router: Router;
	http: Http;
	constructor(private _httpService: HttpService, private _http: Http, router : Router){
	this.router = router;
	this.http = _http;
	  if(localStorage.getItem('token') != null){
		 this.router.parent.navigate(['./MainPage']);
   }

	}
	user = {mail: '', password: ''}
	response: string;
	onPost(username: string, password: password){

	   var data = "username="+username+"&password="+password;
	  var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
	   return this.http.post('http://localhost/loginservice.php',data, {headers:headers})
    .map(res => res)
		.subscribe(
		response => this.response = response,
		error=> {alert(JSON.stringify(error));
		}, 
		() => { 
	 	if(this.response._body.indexOf("false") === -1){
	 	alert('uspesan login');
	 	 this.router.parent.navigate(['./MainPage']);
	 	}

	 	else {
		document.getElementById('bad').innerHTML = 'Nema ni tokena :)'
	 	alert('idiJot');}
	 	});
		
	 
	}


}