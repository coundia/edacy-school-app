/**
 * Enroll  a student in a class
 */
import {Student} from "./student.model";
import {Class} from "./class.model";

export class Enroll{
   public id!: number;
   public student_id!: number;
   public class_id!: number;
   public enrollDate!: Date;
}
