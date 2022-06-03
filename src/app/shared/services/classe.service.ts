import {Injectable} from '@angular/core';
import {Class} from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classes:Class[]=[
    {
      id:1,
      code:"TS1",
      name:"Terminal S1",
      description:"Terminal Scientifique S1 ",
    },
    {
      id:2,
      code:"TS2",
      name:"Terminal S2 ",
      description:"Terminal Scientifique S2 ",
    },
    {
      id:3,
      code:"TL1a",
      name:"Terminal L1a ",
      description:"Terminal Litterature L1a ",
    }
    ,
    {
      id:4,
      code:"TL1b",
      name:"Terminal L1b ",
      description:"Terminal Litterature L1b ",
    }
  ];
  constructor() { }
  /**
   * get list   of classes
   */
  getClasses():Class[]{
    return  this.classes;
  }

  /**
   * add a class
   * @param aClass a Class
   */
  addClass(aClass:Class):Class {
    //sort
    const sortedClasses=this.classes.sort((a,b) => a.id - b.id);
    //increase last ID
    aClass.id = sortedClasses[sortedClasses.length - 1].id+1;
    //console.log(aClass);
    //add the class
    this.classes.push(aClass)
    return aClass;
  }

  /**
   * delete a class
   * @param aClass
   */
  deleteClass(aClass: Class) {
    const toDelete = this.classes.findIndex((c) => c.id === aClass.id);
    //console.log(toDelete);
    this.classes.splice(toDelete, 1);
  }

  /**
   * edit a class
   *
   * @param aClass
   */
  editClass(aClass: Class) {

    //console.log(aClass);
    this.classes[aClass.id-1]=aClass;
    //console.log(  this.classes);
  }

  /**
   *
   * @param id
   */
  getClassByid(id: number) {
    const index = this.classes.findIndex((c) => c.id === id);
    return this.classes[index];
  }
}
