import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()

export class HttpService{
http : Http;
	constructor(private _http: Http){

	this.http = _http;
	}
	
	 getPosts(): Observable<any[]> {

		return this._http.get('http://localhost/getrooms.php');
		.map(res => res.json());	
	}
	createPost(post: {username: string, password: string}): Observable<any>{


	   var data = "username="+post.username+"&password="+post.password;
	  var headers = new Headers();
 	  headers.append('Content-Type', 'application/x-www-form-urlencoded');
	  return this.http.post('http://localhost/loginservice.php',data, {headers:headers})
      .map(res => res);


	}


}

