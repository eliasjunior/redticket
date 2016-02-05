import {Component, Input} from 'angular2/core';
import {Leaf} from './leaf'
import {ButtonRadio} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {NgForm} from 'angular2/common'


@Component({
  selector: 'about',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [ButtonRadio, CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: []
})
export class Home {

  @Input() relatives : Leaf[] = []
  optionGender = [{value: 'M',label:'Masculino'}, {value: 'F', label:'Feminino'}]

  formLeaf : Leaf = new Leaf("", "", "")

  law1948 : boolean = false
  textHelp : string = "Seu nome"
  showInput : boolean = false

  addLeaf() {

    console.log("Save...")

    this.relatives.push(new Leaf(this.formLeaf.name, this.formLeaf.gender, this.formLeaf.dateBirth))

    this.formLeaf = new Leaf("", "", "")


  }
  removeTree(){
    this.relatives = []
  }
}
