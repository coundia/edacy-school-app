import {Injectable} from '@angular/core';
import {Enroll} from '../models/enroll.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  private enrolls:Enroll[]=[
    {
      id:1,
      student_id : 1,
      class_id : 1,
      enrollDate :new Date()
    },
    {
      id:2,
      student_id : 2,
      class_id : 2,
      enrollDate :new Date()
    }
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

  /**
   * get five enrollment
   */
  getFiveEnrolls():Enroll[]{

   var temp :Enroll[]=[];
   if(this.enrolls.length>5){
     const sortedEnrolls=this.enrolls.sort((a,b) => a.id - b.id);
     for (let i = 0; i < 5; i++) {
       temp[i] = sortedEnrolls[this.enrolls.length-1-i];
     }
     return temp;
   }else{
     return this.enrolls;
   }

  }


}
