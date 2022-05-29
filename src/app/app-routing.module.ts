import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./frontoffice/components/home/home.component";
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'portail',
    loadChildren: () => import("./frontoffice/frontoffice-routing.module").then(m => m.FrontOfficeRoutingModule),
  },
  {
    path: '',
    redirectTo: '/home',
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
