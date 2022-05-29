import {Injectable} from '@angular/core';
import {Class} from '../models/class.model';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classes:Class[]=[
    {
      id:1,
      name:"Terminal A",
      description:"Classe terminal A",
    },
    {
      id:2,
      name:"Terminal B",
      description:"Classe terminal B",
    },
    {
      id:3,
      name:"Premiere A",
      description:"Classe premiere A ",
    }
  ];
  constructor() { }
  /**
   * get list classes
   */
  getClasses():Observable<Class[]> {
    return of(this.classes);
  }


  /**
   *
   * @param aClass a Class
   */
  addClass(aClass:Class):Observable<Class> {
    this.classes.push(aClass)
    return of(aClass);
  }

  deleteClass(value: any) {
    
  }

  editClass(value: any) {
    
  }
}
