import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./frontoffice/components/home/home.component";
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {StudentsComponent} from "./frontoffice/components/students/students.component";
import {ClassesComponent} from "./frontoffice/components/classes/classes.component";

const routes: Routes = [
  {
    path: 'portail/home', component: HomeComponent
  },
  //portail
   {
    path: 'portail', loadChildren : () =>import('./frontoffice/frontoffice-routing.module').then(m => m.FrontOfficeRoutingModule),
  },
  //end portail
  {
    path: '',
    redirectTo: 'portail/home',
    pathMatch: 'full'
  }
  ,
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
