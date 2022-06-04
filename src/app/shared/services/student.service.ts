import {Injectable} from '@angular/core';
import {Student} from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      firstName: "Penda",
      lastName: "Sarr"
    },
    {
      id: 2,
      firstName: "Yama",
      lastName: "Seck"
    },
    {
      id: 3,
      firstName: "Fatou",
      lastName: "Diop"
    },
    {
      id: 4,
      firstName: "Abdou",
      lastName: "Diouf"
    },
    {
      id: 5,
      firstName: "Macky",
      lastName: "Wade"
    }
  ];

  constructor() {
  }

  /**
   * get list   of students
   */
  getStudents(): Student[] {
    return this.students;
  }

  /**
   * add a student
   * @param aStudent a Student
   */
  addStudent(aStudent: Student): Student {
    //sort
    const sortedStudents = this.students.sort((a, b) => a.id - b.id);
    //increase last ID
    aStudent.id = sortedStudents[sortedStudents.length - 1].id + 1;
    //console.log(aStudent);
    //add the student
    this.students.push(aStudent)
    return aStudent;
  }

  /**
   * delete a student
   * @param aStudent
   */
  deleteStudent(aStudent: Student) {
    const toDelete = this.students.findIndex((c) => c.id === aStudent.id);
    //console.log(toDelete);
    this.students.splice(toDelete, 1);
  }

  /**
   * edit a student
   *
   * @param aStudent
   */
  editStudent(aStudent: Student) {

    //console.log(aStudent);
    this.students[aStudent.id - 1] = aStudent;
    //console.log(  this.students);
  }

  /**
   *
   * @param student_id
   */
  getStudentByid(student_id: number) {
    const index = this.students.findIndex((c) => c.id === student_id);
    return this.students[index];
  }
}
