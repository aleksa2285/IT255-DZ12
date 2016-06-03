import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {MainPageComponent} from './mainpage/mainpage.component'
import {AllRoomsComponent} from './allrooms/allrooms.component'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddroomComponent} from './addroom/addroom.component';
import {DataTableDirectives} from 'angular2-datatable/datatable';





@Component({
	
	selector: 'proba'
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES],



})
@RouteConfig([

{path:'/', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
{path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
{path:'/allrooms', name: 'AllRooms', component: AllRoomsComponent},
{path:'/login', name: 'Login', component: LoginComponent},
{path:'/register', name: 'Register', component: RegisterComponent}, 
{path:'/addroom', name: 'Addroom', component: AddroomComponent}, 



])
export class AppComponent{
	
	
}
