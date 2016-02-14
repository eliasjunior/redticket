import {Component, Input} from 'angular2/core';
import {Leaf} from '../tree/leaf'
import {TreeService} from '../../services/tree-service'
import {ButtonRadio} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {NgForm} from 'angular2/common'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from '../../header'

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [ButtonRadio, CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Header],
  pipes: []
})

export class Home {

  constructor(public treeService : TreeService, private router:Router){
    treeService.relatives = []
  }

  optionGender = [{value: 'M',label:'Masculino'}, {value: 'F', label:'Feminino'}]

  formLeaf : Leaf = new Leaf(null, null, null)

  law1948 : boolean = false
  textHelp : string = "Seu nome"
  showInput : boolean = false


  addLeaf() {

    console.log("Save...?")

    this.treeService.relatives.push(new Leaf(this.formLeaf.name, this.formLeaf.gender, this.formLeaf.dateBirth))

    this.formLeaf = new Leaf(null, null, null)
  }

  generateReport() {

    this.treeService.relatives.push(new Leaf("Geocom","M",1800))
    this.treeService.relatives.push(new Leaf("Gigo","M",1900))
    this.treeService.relatives.push(new Leaf("Luiza","F",1938))
    this.treeService.relatives.push(new Leaf("Emilia","F",1948))
    this.treeService.relatives.push(new Leaf("Vc","M",1978))

    console.log("Array", this.treeService.relatives)

    //call manager
    this.router.navigate(['TreeManager'])

  }

  removeTree(){
    this.treeService.relatives = []
  }
}
