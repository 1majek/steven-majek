import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BodyComponent } from './components/home/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/home/footer/footer.component';

const routerOptions: ExtraOptions = {
  relativeLinkResolution: 'legacy'
};


const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contactMe', component: FooterComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
