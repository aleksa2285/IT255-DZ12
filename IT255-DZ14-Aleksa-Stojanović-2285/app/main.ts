import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {DataService} from './shareservice/data.service';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService]);