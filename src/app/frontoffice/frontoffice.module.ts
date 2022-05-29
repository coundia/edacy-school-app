import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassesComponent} from "./components/classes/classes.component";
import {HomeComponent} from "./components/home/home.component";
import {StudentsComponent} from './components/students/students.component';
import {FrontOfficeRoutingModule} from "./frontoffice-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";


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
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,

  ]
})
export class FrontofficeModule { }
