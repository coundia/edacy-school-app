import {Injectable} from '@angular/core';
import {Enroll} from '../models/enroll.model';
import {Class} from "../models/class.model";

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  private enrolls:Enroll[]=[
  ];
  constructor() { }
  /**
   * get list   of enrolls
   */
  getEnrolls():Enroll[]{
    return  this.enrolls;
  }

  /**
   * add a enroll
   * @param enroll a Enroll
   */
  addEnroll(enroll:Enroll):Enroll {
    //new enroll
    const enrollTmp={...enroll,enrollDate:new Date()};
    //increase last ID
    if(this.enrolls.length ==0){
      enrollTmp.id=1 ;
    }else{
      const sortedEnrolls=this.enrolls.sort((a,b) => a.id - b.id);
      enrollTmp.id = sortedEnrolls[sortedEnrolls.length - 1].id+1;
    }
    //console.log(enroll);
   const test=  this.enrolls.find((e) => e.student_id == enrollTmp.student_id);
    //add the enroll
    if(!test){
      console.log(" test=== ",test);
      this.enrolls.push(enrollTmp)
    }else{
      alert("l' étudiant << "+enroll.student_id+" >> est  dejà inscrit.");

    }
    return enroll;
  }

  /**
   * delete a enroll
   * @param enroll
   */
  deleteEnroll(enroll: Enroll) {
    const index = this.enrolls.findIndex((c) => c.id === enroll.id);
    this.enrolls.splice(index, 1);
  }




}
