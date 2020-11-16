import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [

  { path: 'about', component: AboutComponent},
  { path: 'main-page', component: MainPageComponent},
  { path: 'not-found', component: NotFoundComponent},

  { path: '', redirectTo:"/main-page", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
