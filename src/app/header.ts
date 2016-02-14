/**
 * Created by .
 */
import {Component, Input} from 'angular2/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'header',
  providers: [],
  templateUrl: 'app/header.html',
  directives: [],
  pipes: []
})
export class Header {
  @Input() name : string
}
