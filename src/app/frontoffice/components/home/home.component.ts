import {Component, OnInit} from '@angular/core';
import {Enroll} from 'src/app/shared/models/enroll.model';
import {EnrollService} from "../../../shared/services/enroll.service";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../../shared/models/class.model";
import {Student} from "../../../shared/models/student.model";
import {StudentService} from "../../../shared/services/student.service";
import {ClasseService} from "../../../shared/services/classe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** Variables */
  enrolls!: Enroll[];
  formGroup!: FormGroup;
  classes!: Class[];
  students!: Student[];

  /** end Variables */
  constructor(private _enrollService: EnrollService, private _classService: ClasseService,
              private _studentService: StudentService, private _formBuilder: FormBuilder) {


  }

  //autocomplet 2
  // classCtrl = new FormControl();
  // studentCtrl = new FormControl();
  filteredClasses!: Observable<Class[]> | undefined;
  filteredStudents!: Observable<Student[]> | undefined;

  //classes filter
  /**
   *
   * @param value
   * @private
   */
  private _filterClasses(value: string): Class[] {
    return this.classes.filter(c => c.name.includes(value));
  }

  /**
   *
   * @param value
   * @private
   */
  private _filterStudents(value: string): Student[] {
    return this.students.filter(s => s.firstName.includes(value));
  }

  //autocomplet end 2
  ngOnInit(): void {
    //build form
    this.formGroup = this._formBuilder.group(
      {
        "id": [1],
        "student_id": ['', Validators.required],
        "class_id": ['', Validators.required]
      }
    );
    this.enrolls = this._enrollService.getFiveEnrolls();
    this.classes = this._classService.getClasses();
    this.students = this._studentService.getStudents();
    //autocomplet class 1
    this.filteredClasses = this.formGroup?.get("class_id")?.valueChanges
      .pipe(
        startWith(''),
        map(c => c ? this._filterClasses(c) : this.classes.slice())
      );
    this.filteredStudents = this.formGroup?.get("student_id")?.valueChanges
      .pipe(
        startWith(''),
        map(c => c ? this._filterStudents(c) : this.students.slice())
      );
    //autocomplet end 1

  }

  inscrire() {
    this._enrollService.addEnroll(this.formGroup.value);
    this.formGroup.reset();
  }
  onCancelClick(c: Enroll) {
    if(confirm("Voulez vraiment annuler cette inscription ? ")){
      this._enrollService.deleteEnroll(c);
    }

  }
  getClassByid(id:number):Class{
    return this._classService.getClassByid(id);
  }

  getStudentByid(student_id: number):Student {
    return this._studentService.getStudentByid(student_id);
  }
}//end enroll

