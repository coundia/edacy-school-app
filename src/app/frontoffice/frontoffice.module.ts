import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesComponent} from "./components/classes/classes.component";
import {HomeComponent} from "./components/home/home.component";
import { StudentsComponent } from './components/students/students.component';
import {FrontOfficeRoutingModule} from "./frontoffice-routing.module";
import {SharedModule} from "../shared/shared.module";
import {  MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomeComponent,
    ClassesComponent,
    StudentsComponent
  ],

  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class FrontofficeModule { }
