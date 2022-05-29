import {Component, OnInit} from '@angular/core';
import {Class} from 'src/app/shared/models/class.model';
import {ClasseService} from "../../../shared/services/classe.service";
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  /** Variables */
  classes$!: Observable<Class[]>;
  formGroup!: FormGroup;
  actionTitle! : string;
   currentAction!:string;

  /** end Variables */
  constructor(private _classService: ClasseService, private _formBuilder: FormBuilder) {
    //build form end
    this.classes$ =this._classService.getClasses().pipe(

      tap(v => {
        console.log(v);
      })
    )
    //end
  }

  ngOnInit(): void {
    //build form
    this.formGroup = this._formBuilder.group(
      {
        "name": ['Terminal A', Validators.required],
        "description": ['Terminal A', Validators.required]
      }
    );
    //init actions


  }
  onSave() {
    this._classService.addClass(this.formGroup.value);
  }
  onDelete() {
    this._classService.deleteClass(this.formGroup.value);
  }
  onEdit() {
    this._classService.editClass(this.formGroup.value);
  }


  onAddClicked() {
    this.actionTitle="Ajouter une classe";
    // this.formGroup.reset();
    this.currentAction="add";
  }

  onEditClicked(c: Class) {
    this.actionTitle="Modifier la  classe : "+c.name;
    this.bindClassValue(c);
    this.currentAction="edit";
  }

  onDeleteClicked(c: Class) {
    this.actionTitle="Supprimer la  classe : "+c.name;
    this.bindClassValue(c);
    this.currentAction="delete";
  }

  onViewClicked(c: Class) {
    this.actionTitle="Information la  classe : "+c.name;
    this.bindClassValue(c);
    this.currentAction="view";
  }
  bindClassValue(c:Class){
    this.formGroup.setValue({
      name: c.name,
      description: c.description
    });
  }
}//end class

