import {Component} from 'angular2/core';
import {HttpService} from './http.service';

@Component({
	

	selector: 'my-template-drivenz', 
	template: `

			<h2>Sign up form</h2>
			<form (ngSubmit)="onSubmit(f)" #f="ngForm">
				<div>
				<label for="mail">Mail</label>
				<input ngControl="mail" type="text" id="mail" required #email="ngForm">
				<span class="validation-error" *ngIf="!email.valid">Not valid</span>
				</div>
				<div>
				<label for="password">Password</label>
				<input ngControl="password" type="text" id="password" required #password="ngForm">
				<span class="validation-error" *ngIf="!password.valid">Not valid</span>
				</div>
				<div>
				<label for="confirm-password">Confirm Password</label>
				<input ngControl="confirmpassword" type="text" id="confirm-password" required #confirmpassword="ngForm">
				<span class="validation-error" *ngIf="!confirmpassword.valid">Not valid</span>
				</div> 
				<button type="submit" [disabled]="!f.valid || password.value!=confirmpassword.value" >Submit</button>
				<button [click] = "getAllPosts()">Pakao</button>
				<button> Login </button>
			</form>
			<div><h2>Response: {{response | json}}</h2></div>
			<div>Mail: {{user.mail}}</div>
			<div>Password: {{user.password}}</div>

	`, 
	styleUrls: ['./css/appy.css'], 
	providers: [HttpService]
})



export class LoginFormComponent{

	constructor(private _httpService: HttpService){}
	user = {mail: '', password: ''}
	response: string;
	
	onSubmit(form){

		this.user.mail = form.value['mail'];
		this.user.password = form.value['password'];
	}
	getAllPosts(){
		this._httpService.getPosts()
		.subscribe(
			response => this.response = response;
			error => console.log(error)
	)

	}

}