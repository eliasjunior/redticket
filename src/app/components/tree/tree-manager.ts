import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Leaf} from './leaf'
import {TreeService} from '../../services/tree-service'
import {Header} from '../../header'

@Component({
  selector: 'treeManager',
  templateUrl: 'app/components/tree/tree-manager.html',
  styleUrls: ['app/components/tree/tree-manager.css'],
  directives: [CORE_DIRECTIVES, Header]
})

export class TreeManager {

  isEligible : boolean = false
  completed : boolean = false

  constructor(public treeService : TreeService) {

    var checkNext = false

    for (var i = 0; i < this.treeService.relatives.length; i++) {
      console.log(this.treeService.relatives[i], i); // 0,1,2

      const currentLeaf = this.treeService.relatives[i]

      if (checkNext && !this.completed) {

        if(currentLeaf.dateBirth >= 1948) {
          this.isEligible = true
          console.log(this.isEligible, this.completed)
        }

        console.log(currentLeaf.name, this.isEligible, currentLeaf.dateBirth, this.completed)
        this.completed = true;
      }

      if (currentLeaf.gender === "F") {
        checkNext = true
      }

    }
  }

}
