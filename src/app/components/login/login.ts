import {Component} from 'angular2/core';

import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from '../../header'

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES, Header],
  pipes: []
})
export class Login {

  email : string
  password : string

  constructor(private router:Router) {

    this.email = 'elias@gmail.com'
    this.password = '123'

  }

  signIn() {

    if (this.email === "elias@gmail.com" &&  this.password === "123") {
      this.router.navigate(['Home', {org: "test"}])

    } else {
      console.log("Wrong password", this.email, this.password)
    }
  }

}
