import {Component, OnInit} from '@angular/core';
import {Student} from 'src/app/shared/models/student.model';
import {StudentService} from "../../../shared/services/student.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  /** Variables */
  students!: Student[];
  formGroup!: FormGroup;
  actionTitle!: string;
  currentAction!: string;

  /** end Variables */
  constructor(private _studentService: StudentService, private _formBuilder: FormBuilder) {

    this.students = this._studentService.getStudents();

  }

  //get list

  ngOnInit(): void {
    //build form
    this.formGroup = this._formBuilder.group(
      {
        "id": [''],
        "firstName": ['', Validators.required],
        "lastName": ['', Validators.required]
      }
    );
    //init actions


  }

  onSave() {

    this._studentService.addStudent(this.formGroup.value);
  }

  onDelete() {
    this._studentService.deleteStudent(this.formGroup.value);
  }

  onEdit() {
    this._studentService.editStudent(this.formGroup.value);
  }


  onAddClicked() {
    this.actionTitle = "Ajouter une student";
    const id = this.students.length;
    // this.bindStudentValue({id:id+1,code:'',description:"",name:""});
    this.formGroup.reset();
    this.currentAction = "addAction";
  }

  onEditClicked(c: Student) {
    this.actionTitle = "Modifier la  student : " + c.firstName + " " + c.lastName;
    this.bindStudentValue(c);
    this.currentAction = "editAction";
  }

  onDeleteClicked(c: Student) {
    this.actionTitle = "Supprimer la  student : " + c.firstName + " " + c.lastName;
    this.bindStudentValue(c);
    this.currentAction = "deleteAction";
  }

  onViewClicked(c: Student) {
    this.actionTitle = "Information la  student : " + c.firstName + " " + c.lastName;
    this.bindStudentValue(c);
    this.currentAction = "viewAction";
  }

  bindStudentValue(c: Student) {
    this.formGroup.setValue({
      id: c.id,
      firstName: c.firstName,
      lastName: c.lastName,
    });
  }
}//end student

