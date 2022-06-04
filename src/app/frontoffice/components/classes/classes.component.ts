import {Component, OnInit} from '@angular/core';
import {Class} from 'src/app/shared/models/class.model';
import {ClasseService} from "../../../shared/services/classe.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  /** Variables */
  classes!: Class[];
  formGroup!: FormGroup;
  actionTitle!: string;
  currentAction!: string;

  /** end Variables */
  constructor(private _classService: ClasseService, private _formBuilder: FormBuilder) {

    this.classes = this._classService.getClasses();

  }

  //get list

  ngOnInit(): void {
    //build form
    this.formGroup = this._formBuilder.group(
      {
        "id": [''],
        "code": ['', Validators.required],
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
    this.actionTitle = "Ajouter une classe";
    const id = this.classes.length;
    // this.bindClassValue({id:id+1,code:'',description:"",name:""});
    this.formGroup.reset();
    this.currentAction = "addAction";
  }

  onEditClicked(c: Class) {
    this.actionTitle = "Modifier la  classe : " + c.name;
    this.bindClassValue(c);
    this.currentAction = "editAction";
  }

  onDeleteClicked(c: Class) {
    this.actionTitle = "Supprimer la  classe : " + c.name;
    this.bindClassValue(c);
    this.currentAction = "deleteAction";
  }

  onViewClicked(c: Class) {
    this.actionTitle = "Information la  classe : " + c.name;
    this.bindClassValue(c);
    this.currentAction = "viewAction";
  }

  bindClassValue(c: Class) {
    this.formGroup.setValue({
      id: c.id,
      code: c.code.toUpperCase(),
      name: c.name,
      description: c.description
    });
  }
}//end class

