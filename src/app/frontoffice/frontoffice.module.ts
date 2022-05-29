import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesComponent} from "./components/classes/classes.component";
import {HomeComponent} from "./components/home/home.component";
import { StudentsComponent } from './components/students/students.component';
import {FrontOfficeRoutingModule} from "./frontoffice-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    HomeComponent,
    ClassesComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule

  ]
})
export class FrontofficeModule { }
