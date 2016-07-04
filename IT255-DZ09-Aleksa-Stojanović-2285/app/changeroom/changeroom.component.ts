import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {DataService} from '../shareservice/data.service';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
@Component({

	
	select: 'addroom', 
	templateUrl: 'app/changeroom/changeroom.html', 
	directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS],
     



})
export class ChangeroomComponent{
	

  data: Object<Array>;
  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router, private dataService: DataService) { 
    this.data = this.dataService.getData();        
    console.log(this.data[0].roomname, this.data.tv);
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     roomName: [""+this.data[0].roomname, Validators.none],
     hasTV: [""+this.data[0].tv, Validators.none],
     beds: [""+this.data[0].beds, Validators.none],
     brojkvadrata: [""+this.data[0].brojkvadrata, Validators.none]

   });
  }
  
  onModifyRoom(): void {

	var data = "roomName="+this.registerForm.value.roomName+"&hasTV="+this.registerForm.value.hasTV+"&beds="+this.registerForm.value.beds+"&brojkvadrata="+this.registerForm.value.brojkvadrata;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	return this.http.post('http://localhost/updateroom.php', data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)),
	() => { 
	if(this.postResponse._body.indexOf("error") === -1){
		alert("Uspesno ste izmenili informacije o sobi");
	    this.router.parent.navigate(['./AllRooms']);
	 }else{
		alert("Invalid argument for room");
	 }
	 }
	);
	
  }




}