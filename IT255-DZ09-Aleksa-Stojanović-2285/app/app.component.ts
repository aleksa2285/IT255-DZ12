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
import {ChangeroomComponent} from './changeroom/changeroom.component';
import {DataTableDirectives} from 'angular2-datatable/datatable';





@Component({
	
	selector: 'proba'
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES],
	styles:['nav.navbar.navbar-default{margin-bottom: 0px;}', '#bs-example-navbar-collapse-1{background-color:black; color:white;}', 'div.container-fluid{background-color:black; color:white;}', 'div.container-fluid a:hover{color:white;}', 'div.container-fluid a:active{color:white;}', 'div.container{width:100%; padding-left: 0px;padding-right:0px;}'], 

})

@RouteConfig([

{path:'/', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
{path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
{path:'/allrooms', name: 'AllRooms', component: AllRoomsComponent},
{path:'/login', name: 'Login', component: LoginComponent},
{path:'/register', name: 'Register', component: RegisterComponent}, 
{path:'/addroom', name: 'Addroom', component: AddroomComponent},
{path:'/changeroom', name: 'Changeroom', component: ChangeroomComponent}, 



])
export class AppComponent{
	
	
}
