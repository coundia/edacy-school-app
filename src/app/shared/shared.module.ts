import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    FlexModule
  ]
})
export class SharedModule { }
