import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from "./components/students/students.component";
import {ClassesComponent} from "./components/classes/classes.component";

/**
 * Front Routes
 */
const routes: Routes = [

  {path: 'students',component:StudentsComponent},
  {path: 'students/:id',component:StudentsComponent},

  {path: 'classes',component:ClassesComponent},
  {path: 'classes/:id',component:ClassesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
