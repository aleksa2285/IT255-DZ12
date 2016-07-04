import {Component} from 'angular2/core';


@Component({
	
	selector: 'mainpage', 
	templateUrl: 'app/mainpage/index.html',
	styleUrls: ['app/mainpage/css/style.css','app/mainpage/css/bootstrap.css', 'app/mainpage/css/bootstrap.min.css', 'app/mainpage/css/full-width-pics.css'], 
	styles: ['#prva { width: 100%; }'],



})
export class MainPageComponent implements OnInit{
	

	ngOnInit(){

	function initialize() {
			var mapProp = {
				center:new google.maps.LatLng(51.508742,-0.120850),
				zoom:5,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			};
			var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}
		google.maps.event.addDomListener(window, 'load', initialize);

}