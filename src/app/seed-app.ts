import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Login} from './components/login/login';
import {Home} from './components/home/home';
import {TreeManager} from './components/tree/tree-manager';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  styleUrls: ['app/css/main.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/login', component: Login, name: 'Login', useAsDefault: true}),
  new Route({ path: '/home', component: Home, name: 'Home'}),
  new Route({ path: '/treeManager', component: TreeManager, name: 'TreeManager'}),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class SeedApp {

  constructor() {
  }

}
